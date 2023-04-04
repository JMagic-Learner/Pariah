import { render, screen } from '@testing-library/react';
import App from './App';

const childFunction2 = (a, b ,c ) => {
  return `This is a sum of ${a+b+c}`
}

const TestFunction = (a,b,c) => {
   childFunction2(a,b,c)
}

const TestObject = {
 childFunction() {
    return "This is a test"
 },
 retro() {
  let value = this.childFunction()
  return value
 }
}

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("we can spy on the child object", () => {

  const childFunction = jest.spyOn(TestObject, 'childFunction')
  const retro = jest.spyOn(TestObject, 'retro')
  const TestIsPlaying = TestObject.childFunction()
  // const retroIsActive = TestObject.retro()

  expect(childFunction).toHaveBeenCalled()
  expect(retro).toHaveBeenCalled()
})

test("we cannot spy on the child function attempt 1", () => {
  const childFunctionAttempt1 = jest.spyOn(TestFunction, 'childFunction2')
  const TestIsPlaying = TestFunction(1,3,5)
  expect(childFunctionAttempt1).toHaveBeenCalled()
})

test("we cannot spy on the child function attempt 2", () => {
  const childFunctionAttempt2 = jest.spyOn(TestFunction(), 'childFunction2')
  const TestIsPlaying = TestFunction(1,3,5)
  expect(childFunctionAttempt2).toHaveBeenCalled()
})

test("we cannot spy on the child function attempt 3", () => {
  const childFunctionAttempt3 = jest.spyOn(TestFunction(1,3,5), 'childFunction2')
  const TestIsPlaying = TestFunction(1,3,5)
  expect(childFunctionAttempt3).toHaveBeenCalled()
})


