import config from "./config";
function ComopnentParser() {


  const parseMap = {
    h1: (node: typeof config[0]) => <h1>{node.content}</h1>,
  }

  function parseConfig(node: typeof config[0]) {
    // @ts-ignore
    const parser = parseMap[node.type]
    if(parser) return parser(node)
    return null;
  }

  const content = config.map(parseConfig)

  return content;
}

export default ComopnentParser;