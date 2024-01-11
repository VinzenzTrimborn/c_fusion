// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: l-ztpDRvIPtm

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
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicQuestionPopUp.module.css"; // plasmic-import: l-ztpDRvIPtm/css

createPlasmicElementProxy;

export type PlasmicQuestionPopUp__VariantMembers = {};
export type PlasmicQuestionPopUp__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuestionPopUp__VariantsArgs;
export const PlasmicQuestionPopUp__VariantProps = new Array<VariantPropType>();

export type PlasmicQuestionPopUp__ArgsType = {};
type ArgPropType = keyof PlasmicQuestionPopUp__ArgsType;
export const PlasmicQuestionPopUp__ArgProps = new Array<ArgPropType>();

export type PlasmicQuestionPopUp__OverridesType = {
  root?: p.Flex<"div">;
  generalPopUp?: p.Flex<"div">;
  frameBox?: p.Flex<"div">;
  frameBoxIn?: p.Flex<"div">;
  textGroup?: p.Flex<"div">;
  textGroupIn?: p.Flex<"div">;
  paragraph?: p.Flex<"div">;
  buttonGroup?: p.Flex<"div">;
  button?: p.Flex<typeof AntdButton>;
  button2?: p.Flex<typeof AntdButton>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultQuestionPopUpProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQuestionPopUp__RenderFunc(props: {
  variants: PlasmicQuestionPopUp__VariantsArgs;
  args: PlasmicQuestionPopUp__ArgsType;
  overrides: PlasmicQuestionPopUp__OverridesType;
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
        data-plasmic-name={"generalPopUp"}
        data-plasmic-override={overrides.generalPopUp}
        className={classNames(projectcss.all, sty.generalPopUp)}
      >
        <div
          data-plasmic-name={"frameBox"}
          data-plasmic-override={overrides.frameBox}
          className={classNames(projectcss.all, sty.frameBox)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"frameBoxIn"}
            data-plasmic-override={overrides.frameBoxIn}
            hasGap={true}
            className={classNames(projectcss.all, sty.frameBoxIn)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"textGroup"}
              data-plasmic-override={overrides.textGroup}
              hasGap={true}
              className={classNames(projectcss.all, sty.textGroup)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"textGroupIn"}
                data-plasmic-override={overrides.textGroupIn}
                hasGap={true}
                className={classNames(projectcss.all, sty.textGroupIn)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__y3RgZ
                  )}
                >
                  {"Would you like to help us by answering some questions?"}
                </div>
                <div
                  data-plasmic-name={"paragraph"}
                  data-plasmic-override={overrides.paragraph}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.paragraph
                  )}
                >
                  {
                    "Those questions would help us understand your feedback better and enable us to address them in our design"
                  }
                </div>
              </p.Stack>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"buttonGroup"}
              data-plasmic-override={overrides.buttonGroup}
              hasGap={true}
              className={classNames(projectcss.all, sty.buttonGroup)}
            >
              <AntdButton
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                type={"Secondary"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vCvkL
                  )}
                >
                  {"Button"}
                </div>
              </AntdButton>
              <AntdButton
                data-plasmic-name={"button2"}
                data-plasmic-override={overrides.button2}
                className={classNames("__wab_instance", sty.button2)}
                type={"Primary"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rjorO
                  )}
                >
                  {"Button"}
                </div>
              </AntdButton>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={p.PlasmicImg}
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            hasGap={true}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"24px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"24px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/fusion_lab/images/frame1041.svg",
              fullWidth: 24,
              fullHeight: 24,
              aspectRatio: 1
            }}
          />
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "generalPopUp",
    "frameBox",
    "frameBoxIn",
    "textGroup",
    "textGroupIn",
    "paragraph",
    "buttonGroup",
    "button",
    "button2",
    "img"
  ],
  generalPopUp: [
    "generalPopUp",
    "frameBox",
    "frameBoxIn",
    "textGroup",
    "textGroupIn",
    "paragraph",
    "buttonGroup",
    "button",
    "button2",
    "img"
  ],
  frameBox: [
    "frameBox",
    "frameBoxIn",
    "textGroup",
    "textGroupIn",
    "paragraph",
    "buttonGroup",
    "button",
    "button2",
    "img"
  ],
  frameBoxIn: [
    "frameBoxIn",
    "textGroup",
    "textGroupIn",
    "paragraph",
    "buttonGroup",
    "button",
    "button2"
  ],
  textGroup: ["textGroup", "textGroupIn", "paragraph"],
  textGroupIn: ["textGroupIn", "paragraph"],
  paragraph: ["paragraph"],
  buttonGroup: ["buttonGroup", "button", "button2"],
  button: ["button"],
  button2: ["button2"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  generalPopUp: "div";
  frameBox: "div";
  frameBoxIn: "div";
  textGroup: "div";
  textGroupIn: "div";
  paragraph: "div";
  buttonGroup: "div";
  button: typeof AntdButton;
  button2: typeof AntdButton;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuestionPopUp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuestionPopUp__VariantsArgs;
    args?: PlasmicQuestionPopUp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuestionPopUp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQuestionPopUp__ArgsType,
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
          internalArgPropNames: PlasmicQuestionPopUp__ArgProps,
          internalVariantPropNames: PlasmicQuestionPopUp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuestionPopUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuestionPopUp";
  } else {
    func.displayName = `PlasmicQuestionPopUp.${nodeName}`;
  }
  return func;
}

export const PlasmicQuestionPopUp = Object.assign(
  // Top-level PlasmicQuestionPopUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    generalPopUp: makeNodeComponent("generalPopUp"),
    frameBox: makeNodeComponent("frameBox"),
    frameBoxIn: makeNodeComponent("frameBoxIn"),
    textGroup: makeNodeComponent("textGroup"),
    textGroupIn: makeNodeComponent("textGroupIn"),
    paragraph: makeNodeComponent("paragraph"),
    buttonGroup: makeNodeComponent("buttonGroup"),
    button: makeNodeComponent("button"),
    button2: makeNodeComponent("button2"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicQuestionPopUp
    internalVariantProps: PlasmicQuestionPopUp__VariantProps,
    internalArgProps: PlasmicQuestionPopUp__ArgProps
  }
);

export default PlasmicQuestionPopUp;
/* prettier-ignore-end */