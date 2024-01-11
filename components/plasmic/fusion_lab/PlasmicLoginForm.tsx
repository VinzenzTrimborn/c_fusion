// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: 6mLOgS1IZY8Z

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Checkbox from "../../Checkbox"; // plasmic-import: QYHJ3nGLufw1/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicLoginForm.module.css"; // plasmic-import: 6mLOgS1IZY8Z/css

createPlasmicElementProxy;

export type PlasmicLoginForm__VariantMembers = {
  isAlreadyRegistered: "unnamedVariant";
};
export type PlasmicLoginForm__VariantsArgs = {
  isAlreadyRegistered?: SingleChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicLoginForm__VariantsArgs;
export const PlasmicLoginForm__VariantProps = new Array<VariantPropType>(
  "isAlreadyRegistered"
);

export type PlasmicLoginForm__ArgsType = {};
type ArgPropType = keyof PlasmicLoginForm__ArgsType;
export const PlasmicLoginForm__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginForm__OverridesType = {
  root?: p.Flex<"div">;
  loginForm?: p.Flex<"div">;
  formArea?: p.Flex<"div">;
  completeBox?: p.Flex<"div">;
  informationArea?: p.Flex<"div">;
  initialText?: p.Flex<"div">;
  signUpText?: p.Flex<"div">;
  signUpToTumItbe?: p.Flex<"div">;
  email?: p.Flex<"div">;
  emailBox?: p.Flex<"div">;
  registerBox?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  checkBox?: p.Flex<"div">;
  checkBox2?: p.Flex<typeof Checkbox>;
  agreeText?: p.Flex<"div">;
  group29?: p.Flex<"div">;
  group28?: p.Flex<"div">;
  rectangle3?: p.Flex<"div">;
  group27?: p.Flex<"div">;
  group26?: p.Flex<"div">;
  register?: p.Flex<"div">;
  rectangle6?: p.Flex<"div">;
  register2?: p.Flex<"div">;
  rectangle7?: p.Flex<"div">;
  answerTheQuestions?: p.Flex<"div">;
  group1?: p.Flex<"div">;
  helpUsMore?: p.Flex<"div">;
  byFillingInAVeryQuickQuestionnaire?: p.Flex<"div">;
  optionBox?: p.Flex<"div">;
  optionBoxRectangle?: p.Flex<"div">;
  optionBoxTextGroup?: p.Flex<"div">;
  optionBoxTextGroup2?: p.Flex<"div">;
  backbutton?: p.Flex<"div">;
  rectangle8?: p.Flex<"div">;
  answerbutton?: p.Flex<"div">;
  rectangle9?: p.Flex<"div">;
  answerTheQuestions2?: p.Flex<"div">;
  moreText?: p.Flex<"div">;
  helpUsMore2?: p.Flex<"div">;
  byFillingInAVeryQuickQuestionnaire2?: p.Flex<"div">;
  groupPicture?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultLoginFormProps {
  isAlreadyRegistered?: SingleChoiceArg<"unnamedVariant">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoginForm__RenderFunc(props: {
  variants: PlasmicLoginForm__VariantsArgs;
  args: PlasmicLoginForm__ArgsType;
  overrides: PlasmicLoginForm__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "checkBox2.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "isAlreadyRegistered",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.isAlreadyRegistered
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"loginForm"}
        data-plasmic-override={overrides.loginForm}
        className={classNames(projectcss.all, sty.loginForm)}
      >
        <div
          data-plasmic-name={"formArea"}
          data-plasmic-override={overrides.formArea}
          className={classNames(projectcss.all, sty.formArea)}
        >
          <div
            data-plasmic-name={"completeBox"}
            data-plasmic-override={overrides.completeBox}
            className={classNames(projectcss.all, sty.completeBox)}
          >
            <div
              data-plasmic-name={"informationArea"}
              data-plasmic-override={overrides.informationArea}
              className={classNames(projectcss.all, sty.informationArea)}
            >
              <div
                data-plasmic-name={"initialText"}
                data-plasmic-override={overrides.initialText}
                className={classNames(projectcss.all, sty.initialText)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x5IkU
                  )}
                >
                  {"Welcome !"}
                </div>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"signUpText"}
                  data-plasmic-override={overrides.signUpText}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.signUpText, {
                    [sty.signUpTextisAlreadyRegistered_unnamedVariant]:
                      hasVariant(
                        $state,
                        "isAlreadyRegistered",
                        "unnamedVariant"
                      )
                  })}
                >
                  <div
                    data-plasmic-name={"signUpToTumItbe"}
                    data-plasmic-override={overrides.signUpToTumItbe}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.signUpToTumItbe,
                      {
                        [sty.signUpToTumItbeisAlreadyRegistered_unnamedVariant]:
                          hasVariant(
                            $state,
                            "isAlreadyRegistered",
                            "unnamedVariant"
                          )
                      }
                    )}
                  >
                    {hasVariant($state, "isAlreadyRegistered", "unnamedVariant")
                      ? "Log in to TUM ITBE "
                      : "Sign up to TUM ITBE "}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p5HrH
                    )}
                  >
                    {"to participate and give feedback"}
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"email"}
                  data-plasmic-override={overrides.email}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.email)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p2TAr
                    )}
                  >
                    {"Email"}
                  </div>
                  <div
                    data-plasmic-name={"emailBox"}
                    data-plasmic-override={overrides.emailBox}
                    className={classNames(projectcss.all, sty.emailBox)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lnDLq
                      )}
                    >
                      {"Enter your email"}
                    </div>
                  </div>
                </p.Stack>
                <div
                  data-plasmic-name={"registerBox"}
                  data-plasmic-override={overrides.registerBox}
                  className={classNames(projectcss.all, sty.registerBox)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uCtqz,
                      {
                        [sty.textisAlreadyRegistered_unnamedVariant__uCtqzMDme]:
                          hasVariant(
                            $state,
                            "isAlreadyRegistered",
                            "unnamedVariant"
                          )
                      }
                    )}
                  >
                    {hasVariant($state, "isAlreadyRegistered", "unnamedVariant")
                      ? "Log in"
                      : "Register"}
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xJsf7,
                    {
                      [sty.textisAlreadyRegistered_unnamedVariant__xJsf7MDme]:
                        hasVariant(
                          $state,
                          "isAlreadyRegistered",
                          "unnamedVariant"
                        )
                    }
                  )}
                >
                  {hasVariant($state, "isAlreadyRegistered", "unnamedVariant")
                    ? "Don\u00b4t have an Account?"
                    : "Already have an Account ?"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xxRiG,
                    {
                      [sty.textisAlreadyRegistered_unnamedVariant__xxRiGMDme]:
                        hasVariant(
                          $state,
                          "isAlreadyRegistered",
                          "unnamedVariant"
                        )
                    }
                  )}
                >
                  {hasVariant(
                    $state,
                    "isAlreadyRegistered",
                    "unnamedVariant"
                  ) ? (
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Register"}
                      </span>
                    </React.Fragment>
                  ) : (
                    "Login"
                  )}
                </div>
              </div>
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"checkBox"}
              data-plasmic-override={overrides.checkBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.checkBox, {
                [sty.checkBoxisAlreadyRegistered_unnamedVariant]: hasVariant(
                  $state,
                  "isAlreadyRegistered",
                  "unnamedVariant"
                )
              })}
            >
              <Checkbox
                data-plasmic-name={"checkBox2"}
                data-plasmic-override={overrides.checkBox2}
                className={classNames("__wab_instance", sty.checkBox2, {
                  [sty.checkBox2isAlreadyRegistered_unnamedVariant]: hasVariant(
                    $state,
                    "isAlreadyRegistered",
                    "unnamedVariant"
                  )
                })}
                isChecked={
                  p.generateStateValueProp($state, [
                    "checkBox2",
                    "isChecked"
                  ]) ?? false
                }
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, [
                    "checkBox2",
                    "isChecked"
                  ])(eventArgs[0]);
                }}
              >
                {""}
              </Checkbox>
              <div
                data-plasmic-name={"agreeText"}
                data-plasmic-override={overrides.agreeText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.agreeText,
                  {
                    [sty.agreeTextisAlreadyRegistered_unnamedVariant]:
                      hasVariant(
                        $state,
                        "isAlreadyRegistered",
                        "unnamedVariant"
                      )
                  }
                )}
              >
                {"I agree that my information can be used for study purposes"}
              </div>
            </p.Stack>
            {false ? (
              <div
                data-plasmic-name={"group29"}
                data-plasmic-override={overrides.group29}
                className={classNames(projectcss.all, sty.group29)}
              >
                <div
                  data-plasmic-name={"group28"}
                  data-plasmic-override={overrides.group28}
                  className={classNames(projectcss.all, sty.group28)}
                >
                  <div
                    data-plasmic-name={"rectangle3"}
                    data-plasmic-override={overrides.rectangle3}
                    className={classNames(projectcss.all, sty.rectangle3)}
                  />

                  <div
                    data-plasmic-name={"group27"}
                    data-plasmic-override={overrides.group27}
                    className={classNames(projectcss.all, sty.group27)}
                  >
                    <div
                      data-plasmic-name={"group26"}
                      data-plasmic-override={overrides.group26}
                      className={classNames(projectcss.all, sty.group26)}
                    >
                      <div
                        data-plasmic-name={"register"}
                        data-plasmic-override={overrides.register}
                        className={classNames(projectcss.all, sty.register)}
                      >
                        <div
                          data-plasmic-name={"rectangle6"}
                          data-plasmic-override={overrides.rectangle6}
                          className={classNames(projectcss.all, sty.rectangle6)}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mIXoP
                          )}
                        >
                          {"Back to the feedback page"}
                        </div>
                      </div>
                      <div
                        data-plasmic-name={"register2"}
                        data-plasmic-override={overrides.register2}
                        className={classNames(projectcss.all, sty.register2)}
                      >
                        <div
                          data-plasmic-name={"rectangle7"}
                          data-plasmic-override={overrides.rectangle7}
                          className={classNames(projectcss.all, sty.rectangle7)}
                        />

                        <div
                          data-plasmic-name={"answerTheQuestions"}
                          data-plasmic-override={overrides.answerTheQuestions}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.answerTheQuestions
                          )}
                        >
                          {"Answer the questions "}
                        </div>
                      </div>
                      <div
                        data-plasmic-name={"group1"}
                        data-plasmic-override={overrides.group1}
                        className={classNames(projectcss.all, sty.group1)}
                      >
                        <div
                          data-plasmic-name={"helpUsMore"}
                          data-plasmic-override={overrides.helpUsMore}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.helpUsMore
                          )}
                        >
                          {"Help us more "}
                        </div>
                        <div
                          data-plasmic-name={
                            "byFillingInAVeryQuickQuestionnaire"
                          }
                          data-plasmic-override={
                            overrides.byFillingInAVeryQuickQuestionnaire
                          }
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.byFillingInAVeryQuickQuestionnaire
                          )}
                        >
                          {"by filling in a very quick questionnaire "}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zR37
                        )}
                      >
                        {"Thank you for joining us!"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          {false ? (
            <div
              data-plasmic-name={"optionBox"}
              data-plasmic-override={overrides.optionBox}
              className={classNames(projectcss.all, sty.optionBox)}
            >
              <div
                data-plasmic-name={"optionBoxRectangle"}
                data-plasmic-override={overrides.optionBoxRectangle}
                className={classNames(projectcss.all, sty.optionBoxRectangle)}
              />

              <div
                data-plasmic-name={"optionBoxTextGroup"}
                data-plasmic-override={overrides.optionBoxTextGroup}
                className={classNames(projectcss.all, sty.optionBoxTextGroup)}
              >
                <div
                  data-plasmic-name={"optionBoxTextGroup2"}
                  data-plasmic-override={overrides.optionBoxTextGroup2}
                  className={classNames(
                    projectcss.all,
                    sty.optionBoxTextGroup2
                  )}
                >
                  <div
                    data-plasmic-name={"backbutton"}
                    data-plasmic-override={overrides.backbutton}
                    className={classNames(projectcss.all, sty.backbutton)}
                  >
                    <div
                      data-plasmic-name={"rectangle8"}
                      data-plasmic-override={overrides.rectangle8}
                      className={classNames(projectcss.all, sty.rectangle8)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xeOva
                      )}
                    >
                      {"Back to the feedback page"}
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"answerbutton"}
                    data-plasmic-override={overrides.answerbutton}
                    className={classNames(projectcss.all, sty.answerbutton)}
                  >
                    <div
                      data-plasmic-name={"rectangle9"}
                      data-plasmic-override={overrides.rectangle9}
                      className={classNames(projectcss.all, sty.rectangle9)}
                    />

                    <div
                      data-plasmic-name={"answerTheQuestions2"}
                      data-plasmic-override={overrides.answerTheQuestions2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.answerTheQuestions2
                      )}
                    >
                      {"Answer the questions "}
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"moreText"}
                    data-plasmic-override={overrides.moreText}
                    className={classNames(projectcss.all, sty.moreText)}
                  >
                    <div
                      data-plasmic-name={"helpUsMore2"}
                      data-plasmic-override={overrides.helpUsMore2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.helpUsMore2
                      )}
                    >
                      {"Help us more "}
                    </div>
                    <div
                      data-plasmic-name={"byFillingInAVeryQuickQuestionnaire2"}
                      data-plasmic-override={
                        overrides.byFillingInAVeryQuickQuestionnaire2
                      }
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.byFillingInAVeryQuickQuestionnaire2
                      )}
                    >
                      {"by filling in a very quick questionnaire "}
                    </div>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bOlxN
                    )}
                  >
                    {"Thank you for joining us!"}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <p.PlasmicImg
          data-plasmic-name={"groupPicture"}
          data-plasmic-override={overrides.groupPicture}
          alt={""}
          className={classNames(sty.groupPicture)}
          displayHeight={"458px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"783px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/fusion_lab/images/smallTeamDiscussingIdeas219422003.svg",
            fullWidth: 827,
            fullHeight: 650,
            aspectRatio: 1.272308
          }}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "loginForm",
    "formArea",
    "completeBox",
    "informationArea",
    "initialText",
    "signUpText",
    "signUpToTumItbe",
    "email",
    "emailBox",
    "registerBox",
    "freeBox",
    "checkBox",
    "checkBox2",
    "agreeText",
    "group29",
    "group28",
    "rectangle3",
    "group27",
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire",
    "optionBox",
    "optionBoxRectangle",
    "optionBoxTextGroup",
    "optionBoxTextGroup2",
    "backbutton",
    "rectangle8",
    "answerbutton",
    "rectangle9",
    "answerTheQuestions2",
    "moreText",
    "helpUsMore2",
    "byFillingInAVeryQuickQuestionnaire2",
    "groupPicture"
  ],
  loginForm: [
    "loginForm",
    "formArea",
    "completeBox",
    "informationArea",
    "initialText",
    "signUpText",
    "signUpToTumItbe",
    "email",
    "emailBox",
    "registerBox",
    "freeBox",
    "checkBox",
    "checkBox2",
    "agreeText",
    "group29",
    "group28",
    "rectangle3",
    "group27",
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire",
    "optionBox",
    "optionBoxRectangle",
    "optionBoxTextGroup",
    "optionBoxTextGroup2",
    "backbutton",
    "rectangle8",
    "answerbutton",
    "rectangle9",
    "answerTheQuestions2",
    "moreText",
    "helpUsMore2",
    "byFillingInAVeryQuickQuestionnaire2",
    "groupPicture"
  ],
  formArea: [
    "formArea",
    "completeBox",
    "informationArea",
    "initialText",
    "signUpText",
    "signUpToTumItbe",
    "email",
    "emailBox",
    "registerBox",
    "freeBox",
    "checkBox",
    "checkBox2",
    "agreeText",
    "group29",
    "group28",
    "rectangle3",
    "group27",
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire",
    "optionBox",
    "optionBoxRectangle",
    "optionBoxTextGroup",
    "optionBoxTextGroup2",
    "backbutton",
    "rectangle8",
    "answerbutton",
    "rectangle9",
    "answerTheQuestions2",
    "moreText",
    "helpUsMore2",
    "byFillingInAVeryQuickQuestionnaire2"
  ],
  completeBox: [
    "completeBox",
    "informationArea",
    "initialText",
    "signUpText",
    "signUpToTumItbe",
    "email",
    "emailBox",
    "registerBox",
    "freeBox",
    "checkBox",
    "checkBox2",
    "agreeText",
    "group29",
    "group28",
    "rectangle3",
    "group27",
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire"
  ],
  informationArea: [
    "informationArea",
    "initialText",
    "signUpText",
    "signUpToTumItbe",
    "email",
    "emailBox",
    "registerBox",
    "freeBox"
  ],
  initialText: [
    "initialText",
    "signUpText",
    "signUpToTumItbe",
    "email",
    "emailBox",
    "registerBox"
  ],
  signUpText: ["signUpText", "signUpToTumItbe"],
  signUpToTumItbe: ["signUpToTumItbe"],
  email: ["email", "emailBox"],
  emailBox: ["emailBox"],
  registerBox: ["registerBox"],
  freeBox: ["freeBox"],
  checkBox: ["checkBox", "checkBox2", "agreeText"],
  checkBox2: ["checkBox2"],
  agreeText: ["agreeText"],
  group29: [
    "group29",
    "group28",
    "rectangle3",
    "group27",
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire"
  ],
  group28: [
    "group28",
    "rectangle3",
    "group27",
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire"
  ],
  rectangle3: ["rectangle3"],
  group27: [
    "group27",
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire"
  ],
  group26: [
    "group26",
    "register",
    "rectangle6",
    "register2",
    "rectangle7",
    "answerTheQuestions",
    "group1",
    "helpUsMore",
    "byFillingInAVeryQuickQuestionnaire"
  ],
  register: ["register", "rectangle6"],
  rectangle6: ["rectangle6"],
  register2: ["register2", "rectangle7", "answerTheQuestions"],
  rectangle7: ["rectangle7"],
  answerTheQuestions: ["answerTheQuestions"],
  group1: ["group1", "helpUsMore", "byFillingInAVeryQuickQuestionnaire"],
  helpUsMore: ["helpUsMore"],
  byFillingInAVeryQuickQuestionnaire: ["byFillingInAVeryQuickQuestionnaire"],
  optionBox: [
    "optionBox",
    "optionBoxRectangle",
    "optionBoxTextGroup",
    "optionBoxTextGroup2",
    "backbutton",
    "rectangle8",
    "answerbutton",
    "rectangle9",
    "answerTheQuestions2",
    "moreText",
    "helpUsMore2",
    "byFillingInAVeryQuickQuestionnaire2"
  ],
  optionBoxRectangle: ["optionBoxRectangle"],
  optionBoxTextGroup: [
    "optionBoxTextGroup",
    "optionBoxTextGroup2",
    "backbutton",
    "rectangle8",
    "answerbutton",
    "rectangle9",
    "answerTheQuestions2",
    "moreText",
    "helpUsMore2",
    "byFillingInAVeryQuickQuestionnaire2"
  ],
  optionBoxTextGroup2: [
    "optionBoxTextGroup2",
    "backbutton",
    "rectangle8",
    "answerbutton",
    "rectangle9",
    "answerTheQuestions2",
    "moreText",
    "helpUsMore2",
    "byFillingInAVeryQuickQuestionnaire2"
  ],
  backbutton: ["backbutton", "rectangle8"],
  rectangle8: ["rectangle8"],
  answerbutton: ["answerbutton", "rectangle9", "answerTheQuestions2"],
  rectangle9: ["rectangle9"],
  answerTheQuestions2: ["answerTheQuestions2"],
  moreText: ["moreText", "helpUsMore2", "byFillingInAVeryQuickQuestionnaire2"],
  helpUsMore2: ["helpUsMore2"],
  byFillingInAVeryQuickQuestionnaire2: ["byFillingInAVeryQuickQuestionnaire2"],
  groupPicture: ["groupPicture"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginForm: "div";
  formArea: "div";
  completeBox: "div";
  informationArea: "div";
  initialText: "div";
  signUpText: "div";
  signUpToTumItbe: "div";
  email: "div";
  emailBox: "div";
  registerBox: "div";
  freeBox: "div";
  checkBox: "div";
  checkBox2: typeof Checkbox;
  agreeText: "div";
  group29: "div";
  group28: "div";
  rectangle3: "div";
  group27: "div";
  group26: "div";
  register: "div";
  rectangle6: "div";
  register2: "div";
  rectangle7: "div";
  answerTheQuestions: "div";
  group1: "div";
  helpUsMore: "div";
  byFillingInAVeryQuickQuestionnaire: "div";
  optionBox: "div";
  optionBoxRectangle: "div";
  optionBoxTextGroup: "div";
  optionBoxTextGroup2: "div";
  backbutton: "div";
  rectangle8: "div";
  answerbutton: "div";
  rectangle9: "div";
  answerTheQuestions2: "div";
  moreText: "div";
  helpUsMore2: "div";
  byFillingInAVeryQuickQuestionnaire2: "div";
  groupPicture: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginForm__VariantsArgs;
    args?: PlasmicLoginForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginForm__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLoginForm__ArgProps,
          internalVariantPropNames: PlasmicLoginForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginForm";
  } else {
    func.displayName = `PlasmicLoginForm.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginForm = Object.assign(
  // Top-level PlasmicLoginForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginForm: makeNodeComponent("loginForm"),
    formArea: makeNodeComponent("formArea"),
    completeBox: makeNodeComponent("completeBox"),
    informationArea: makeNodeComponent("informationArea"),
    initialText: makeNodeComponent("initialText"),
    signUpText: makeNodeComponent("signUpText"),
    signUpToTumItbe: makeNodeComponent("signUpToTumItbe"),
    email: makeNodeComponent("email"),
    emailBox: makeNodeComponent("emailBox"),
    registerBox: makeNodeComponent("registerBox"),
    freeBox: makeNodeComponent("freeBox"),
    checkBox: makeNodeComponent("checkBox"),
    checkBox2: makeNodeComponent("checkBox2"),
    agreeText: makeNodeComponent("agreeText"),
    group29: makeNodeComponent("group29"),
    group28: makeNodeComponent("group28"),
    rectangle3: makeNodeComponent("rectangle3"),
    group27: makeNodeComponent("group27"),
    group26: makeNodeComponent("group26"),
    register: makeNodeComponent("register"),
    rectangle6: makeNodeComponent("rectangle6"),
    register2: makeNodeComponent("register2"),
    rectangle7: makeNodeComponent("rectangle7"),
    answerTheQuestions: makeNodeComponent("answerTheQuestions"),
    group1: makeNodeComponent("group1"),
    helpUsMore: makeNodeComponent("helpUsMore"),
    byFillingInAVeryQuickQuestionnaire: makeNodeComponent(
      "byFillingInAVeryQuickQuestionnaire"
    ),
    optionBox: makeNodeComponent("optionBox"),
    optionBoxRectangle: makeNodeComponent("optionBoxRectangle"),
    optionBoxTextGroup: makeNodeComponent("optionBoxTextGroup"),
    optionBoxTextGroup2: makeNodeComponent("optionBoxTextGroup2"),
    backbutton: makeNodeComponent("backbutton"),
    rectangle8: makeNodeComponent("rectangle8"),
    answerbutton: makeNodeComponent("answerbutton"),
    rectangle9: makeNodeComponent("rectangle9"),
    answerTheQuestions2: makeNodeComponent("answerTheQuestions2"),
    moreText: makeNodeComponent("moreText"),
    helpUsMore2: makeNodeComponent("helpUsMore2"),
    byFillingInAVeryQuickQuestionnaire2: makeNodeComponent(
      "byFillingInAVeryQuickQuestionnaire2"
    ),
    groupPicture: makeNodeComponent("groupPicture"),

    // Metadata about props expected for PlasmicLoginForm
    internalVariantProps: PlasmicLoginForm__VariantProps,
    internalArgProps: PlasmicLoginForm__ArgProps
  }
);

export default PlasmicLoginForm;
/* prettier-ignore-end */
