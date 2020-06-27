import React, { useContext, useMemo, useRef, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlightStyle from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
import Explanation from "../Explanation";
import Preface from "../Preface";
import cloneDeep from "lodash.clonedeep";

interface Log {
  message: string;
  fireDate: number;
  elapsedTime: number | null;
  mixed?: any;
}
type LogAction = (message: string, mixed?: any) => void;
interface LogContext {
  action: LogAction;
  logs: React.MutableRefObject<Log[]>;
  observers: React.MutableRefObject<(() => void)[]>;
}
const LoggerContext = React.createContext<LogContext | null>(null);
export const useLog = () => {
  const context = useContext(LoggerContext)!;
  useEffect(() => {
    const renderDate = Date.now();
    context.logs.current = context.logs.current.map((tLog) => {
      return !tLog.elapsedTime
        ? {
            ...tLog,
            elapsedTime: renderDate - tLog.fireDate,
          }
        : tLog;
    });
    context.observers.current.forEach((observer) => observer());
  });

  return context.action;
};
const useLogObserver = () => {
  const context = useContext(LoggerContext)!;
  const [_, setTrigger] = useState<number>(0);

  useEffect(() => {
    const callback = () => {
      setTrigger((t) => t + 1);
    };
    context.observers.current.push(callback);
    return () => {
      context.observers.current = context.observers.current.filter(
        (observer) => observer !== callback
      );
    };
  }, [context]);
  return context.logs.current;
};

const Code = ({ code }: { code?: string | null }) => {
  if (!code) {
    return null;
  }
  return (
    <SyntaxHighlighter
      customStyle={{
        margin: 0,
        padding: 0,
        overflow: "auto",
        position: "absolute",
        top: 10,
        bottom: 10,
        width: "100%",
      }}
      language="typescript"
      style={highlightStyle}
      showLineNumbers={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

const Logs = ({ clear }: { clear: () => void }) => {
  const logs = useLogObserver();

  return (
    <div
      style={{
        color: "#EEEEEE",
        height: "100%",
        margin: "2em 0em",
        border: "1px #EEE solid",
        overflow: "auto",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 5, right: 5, cursor: "pointer" }} onClick={clear}>
        🗑
      </div>
      {logs
        .map((log, i) => (
          <div key={i} style={{ margin: 10, borderBottom: "1px #EEE solid" }}>
            [<span style={{ fontWeight: "bold" }}>{i}</span>] (
            <span style={{ fontStyle: "italic" }}>+{log.elapsedTime || "..."}ms</span>){" "}
            {log.message}
            <pre>{JSON.stringify(log.mixed, null, 2)}</pre>
          </div>
        ))
        .reverse()}
    </div>
  );
};

const ComponentAndText = ({
  preface,
  explanation,
  children,
}: {
  children: React.ReactNode;
  preface?: React.ReactNode;
  explanation?: React.ReactNode;
}) => {
  return (
    <div>
      {preface && <Preface>{preface}</Preface>}
      <div
        style={{
          padding: 10,
          margin: "0px 0px 10px 0px",
          backgroundColor: "##000",
          color: "#FFF",
          border: "1px solid #FFF",
        }}
      >
        {children}
      </div>
      {explanation && <Explanation>{explanation}</Explanation>}
    </div>
  );
};

const Col = ({
  percentage,
  margin,
  children,
}: {
  percentage: number;
  margin: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        flex: `0 0 ${percentage}%`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: margin,
          right: margin,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface IProps {
  id: string;
  Component: React.ComponentType<{}>;
  title: string;
  prev?: string;
  next?: string;
  code?: string;
  preface?: React.ReactNode;
  explanation?: React.ReactNode;
}

const ExampleBloc = ({ id, Component, title, prev, next, code, preface, explanation }: IProps) => {
  const logStorage = useRef<Log[]>([]);
  const logObservers = useRef<(() => void)[]>([]);

  const memoComponent = useMemo(() => {
    const log = (message: string, mixed?: any) => {
      const newLog: Log = {
        message: message,
        fireDate: Date.now(),
        elapsedTime: null,
        mixed: cloneDeep(mixed),
      };
      logStorage.current.push(newLog);
    };

    return (
      <LoggerContext.Provider value={{ action: log, logs: logStorage, observers: logObservers }}>
        <section
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
            margin: "40px 0",
            color: "#FFFFFF",
            backgroundColor: "#282c34",
            textAlign: "left",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          }}
        >
          <h3
            id={id}
            style={{
              margin: 10,
              padding: 10,
              borderBottom: "1px solid #61dafb",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a style={{ color: "#61dafb", textDecoration: "none" }} href={`#${id}`}>
              {title}
            </a>
            <div>
              {prev && (
                <a
                  style={{
                    color: "#61dafb",
                    textDecoration: "none",
                    margin: "0 10px",
                  }}
                  href={`#${prev}`}
                >
                  ⇐
                </a>
              )}
              {next && (
                <a style={{ color: "#61dafb", textDecoration: "none" }} href={`#${next}`}>
                  ⇒
                </a>
              )}
            </div>
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              position: "absolute",
              top: 50,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <Col percentage={50} margin={30}>
              <Code code={code} />
            </Col>

            <Col percentage={50} margin={30}>
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <ComponentAndText preface={preface} explanation={explanation}>
                  <Component />
                </ComponentAndText>

                <Logs
                  clear={() => {
                    logStorage.current = [];
                    logObservers.current.forEach((observer) => observer());
                  }}
                />
              </div>
            </Col>
          </div>
        </section>
      </LoggerContext.Provider>
    );
  }, [logStorage, logObservers, id, title, prev, next, code, preface, explanation]);

  if (code) {
    code = code.replace(/\r/g, "");
    code = code.replace(/import.*\n/g, "");
    code = code.replace(/export.*\n/g, "");
    code = code.trim();
  }

  return <>{memoComponent}</>;
};

export default ExampleBloc;
