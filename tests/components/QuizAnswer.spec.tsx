import * as React from "react";
import { shallow } from "enzyme";
import { QuizAnswer } from "../../src/components/quiz/answer";
import Button from "@material-ui/core/Button";
import { describe, expect, test } from "@jest/globals";

describe("<QuizAnswer/> spec", () => {
  test("should render contained button for non html answer", () => {
    const questionAnswer = {
      value: "value",
      content: "content",
      isHTML: false,
    };
    const wrapper = shallow(<QuizAnswer answer={questionAnswer} />);
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.prop("variant")).toEqual("contained");
  });

  test("should render outlined button for html answer", () => {
    const question = {
      value: "value",
      content: "content",
      isHTML: true,
    };
    const wrapper = shallow(<QuizAnswer answer={question} />);
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.prop("variant")).toEqual("outlined");
  });
});
