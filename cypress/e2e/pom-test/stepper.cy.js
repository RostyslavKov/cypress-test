import { navigateTo } from "../../modules/navigation";
import { cheakHeaderAndClickNextButton } from "../../modules/stepper";
import { URL } from "../../support/constants";

describe ('Stepper page', () => {

  beforeEach('Open Stepper page', () => {
    navigateTo(URL.Stepper);
  })

  it ('First test',()=> {
    cheakHeaderAndClickNextButton();
  })
});