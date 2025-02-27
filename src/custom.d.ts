/* eslint-disable import/no-default-export */
declare module "*.svg" {
  const ReactComponent: (props: React.SVGAttributes<SVGElement>) => React.ReactElement<React.SVGAttributes<SVGElement>>;

  export {ReactComponent};
  export default ReactComponent;
}
