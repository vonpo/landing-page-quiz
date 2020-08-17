import * as React from "react";
import { shallow } from "enzyme";
import { QuizQuestion } from "../../src/components/quiz/question";
import { QuizAnswer } from "../../src/components/quiz/answer";
import { describe, expect, test } from "@jest/globals";

describe("<QuizQuestion/> spec", () => {
  test("should render question with answers", () => {
    const questionOption = {
      value: "value",
      content: "content",
      isHTML: false,
    };
    const question = {
      question: "Test?",
      type: "ChoiceType",
      options: [questionOption, questionOption],
    };

    const wrapper = shallow(<QuizQuestion question={question} />);
    const answers = wrapper.find(QuizAnswer);

    expect(answers).toHaveLength(2);
  });

  test("should not render not supported answer type", () => {
    const questionOption = {
      value: "value",
      content: "content",
      isHTML: false,
    };
    const question = {
      question: "Test?",
      type: "NotSupported",
      options: [questionOption, questionOption],
    };

    const wrapper = shallow(<QuizQuestion question={question} />);
    const answers = wrapper.find(QuizAnswer);

    expect(answers).toHaveLength(0);
  });
});
