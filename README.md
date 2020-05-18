# Vis components

## In Short

1. Write your code in `src/visualizations` and import your component in `src/index-dev.js`.
2. To start dev server with hot module reload, run `yarn dev`.
3. To build the lib, run `yarn build`.
4. To test the built component, write a test file `test/<component-name>.test.js` and run `yarn test <component-name>`.

## Dev

Follow the component interfaces designed by Ran Chen, which should cover
1. accepted data type
2. configurable props
3. reactive property names

Note each component should have a method to respond to container resize event.
