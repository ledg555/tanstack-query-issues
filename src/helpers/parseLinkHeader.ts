export type HeaderLinks = Record<string, string>;

export function parseLinkHeader(unparsedLinkHeader: string): HeaderLinks {
  const linksObj: HeaderLinks = {};
  if (!unparsedLinkHeader) return linksObj;
  let linksArr = unparsedLinkHeader.split(/>; rel="|", </);
  const lastElement = linksArr[linksArr.length-1];
  linksArr[linksArr.length-1] = lastElement.replace(/\W+/g, "");
  linksArr = [...linksArr].map((e, i) => {
    return i % 2 === 0
    ? e.slice(e.search(/(?<=&page=)\d+/), e.search(/(?<=&page=\d+)\b/))
    : e;
  })
  console.log(linksArr);

  for (let i = 0; i < linksArr.length/2; i++) {
    linksObj[linksArr[2*i+1]] = linksArr[2*i];
  }
  return linksObj;
}