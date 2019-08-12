import React, { useContext, useMemo, useReducer } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlightStyle from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
import Explanation from "../Explanation";
import Preface from "../Preface";
import cloneDeep from "lodash.clonedeep";

export interface ILogger {
  log: (message: string, mixed?: any) => void;
}

interface ILogs {
  logs: ILog[];
  id: number;
}

interface ILog {
  id: number;
  message: string;
  mixed?: any;
  time: number;
}

const LoggerContext = React.createContext<ILogger | null>(null);

export const useLog = () => {
  return useContext(LoggerContext)!.log;
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
        width: "100%"
      }}
      language="typescript"
      style={highlightStyle}
      showLineNumbers={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

const Logs = ({ logs, clear }: { logs: ILog[]; clear: () => void }) => {
  return (
    <div
      style={{
        color: "#EEEEEE",
        overflow: "auto",
        position: "absolute",
        top: 10,
        bottom: 10,
        width: "100%",
        borderLeft: "1px #EEE solid"
      }}
    >
      <div
        style={{ position: "absolute", top: 5, right: 5, cursor: "pointer" }}
        onClick={clear}
      >
        🗑
      </div>
      {logs
        .map((log, i) => (
          <div
            key={log.id}
            style={{ margin: 10, borderBottom: "1px #EEE solid" }}
          >
            [<span style={{ fontWeight: "bold" }}>{log.id}</span>] (
            <span style={{ fontStyle: "italic" }}>
              +{log.time - (logs[i - 1] || log).time}ms
            </span>
            ) {log.message}
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
  children
}: {
  children: React.ReactNode;
  preface?: React.ReactNode;
  explanation?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        overflow: "auto",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      {preface && <Preface>{preface}</Preface>}
      <div
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "##000",
          color: "#FFF",
          border: "1px solid #FFF"
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
  children
}: {
  percentage: number;
  margin: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        flex: `0 0 ${percentage}%`,
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: margin,
          right: margin
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

const ExampleBloc = ({
  id,
  Component,
  title,
  prev,
  next,
  code,
  preface,
  explanation
}: IProps) => {
  const [logs, dispatch] = useReducer(
    (logs: ILogs, action): ILogs => {
      switch (action.type) {
        case "add":
          return {
            logs: [...logs.logs, { ...action.payload, id: logs.id }],
            id: logs.id + 1
          };

        case "clear":
          return { logs: [], id: 1 };

        default:
          throw new Error("Not implemented: " + action.type);
      }
    },
    { logs: [], id: 1 }
  );

  const memoComponent = useMemo(() => {
    const log = (message: string, mixed?: any) => {
      dispatch({
        type: "add",
        payload: { message, time: Date.now(), mixed: cloneDeep(mixed) }
      });
    };

    return (
      <LoggerContext.Provider value={{ log }}>
        <Component />
      </LoggerContext.Provider>
    );
  }, []);

  if (code) {
    code = code.replace(/\r/g, "");
    code = code.replace(/import.*\n/g, "");
    code = code.replace(/export.*\n/g, "");
    code = code.trim();
  }

  return (
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
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
      }}
    >
      <h3
        id={id}
        style={{
          margin: 10,
          padding: 10,
          borderBottom: "1px solid #61dafb",
          display: "flex",
          justifyContent: "space-between"
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
                margin: "0 10px"
              }}
              href={`#${prev}`}
            >
              ⇐
            </a>
          )}
          {next && (
            <a
              style={{ color: "#61dafb", textDecoration: "none" }}
              href={`#${next}`}
            >
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
          right: 0
        }}
      >
        <Col percentage={40} margin={30}>
          <Code code={code} />
        </Col>

        <Col percentage={40} margin={30}>
          <ComponentAndText preface={preface} explanation={explanation}>
            {memoComponent}
          </ComponentAndText>
        </Col>

        <Col percentage={20} margin={30}>
          <Logs logs={logs.logs} clear={() => dispatch({ type: "clear" })} />
        </Col>
      </div>
    </section>
  );
};

export default ExampleBloc;
