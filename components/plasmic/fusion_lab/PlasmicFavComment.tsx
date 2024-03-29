// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: 0MoHniQ3DN8s

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicFavComment.module.css"; // plasmic-import: 0MoHniQ3DN8s/css

import LikeSvgrepoComsvgIcon from "./icons/PlasmicIcon__LikeSvgrepoComsvg"; // plasmic-import: fk0APNR9z8Wz/icon
import LocationArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__LocationArrowSvgrepoComsvg"; // plasmic-import: DXlzMsobazwr/icon

createPlasmicElementProxy;

export type PlasmicFavComment__VariantMembers = {};
export type PlasmicFavComment__VariantsArgs = {};
type VariantPropType = keyof PlasmicFavComment__VariantsArgs;
export const PlasmicFavComment__VariantProps = new Array<VariantPropType>();

export type PlasmicFavComment__ArgsType = {};
type ArgPropType = keyof PlasmicFavComment__ArgsType;
export const PlasmicFavComment__ArgProps = new Array<ArgPropType>();

export type PlasmicFavComment__OverridesType = {
  root?: p.Flex<"div">;
  locationButton?: p.Flex<"div">;
};

export interface DefaultFavCommentProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFavComment__RenderFunc(props: {
  variants: PlasmicFavComment__VariantsArgs;
  args: PlasmicFavComment__ArgsType;
  overrides: PlasmicFavComment__OverridesType;
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___5RZm1)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__kyBml)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hSbLs
            )}
          >
            {"Vinzenz@trimborn"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___535Oh)}>
            <div className={classNames(projectcss.all, sty.freeBox__plKZu)}>
              <LikeSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__yy8Eb)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__fNv2V)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nQtYc
                )}
              >
                {"400"}
              </div>
            </div>
            <div
              data-plasmic-name={"locationButton"}
              data-plasmic-override={overrides.locationButton}
              className={classNames(projectcss.all, sty.locationButton)}
            >
              <LocationArrowSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__qqJrc)}
                role={"img"}
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__vvwwr
          )}
        >
          {
            "I wan go baff but I can\u2019t. Because chowdeck riders move like thieves in the night. Before you cough, rider don reach your gate. The efficiency and speed is crazy."
          }
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "locationButton"],
  locationButton: ["locationButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  locationButton: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFavComment__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFavComment__VariantsArgs;
    args?: PlasmicFavComment__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFavComment__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFavComment__ArgsType,
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
          internalArgPropNames: PlasmicFavComment__ArgProps,
          internalVariantPropNames: PlasmicFavComment__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFavComment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFavComment";
  } else {
    func.displayName = `PlasmicFavComment.${nodeName}`;
  }
  return func;
}

export const PlasmicFavComment = Object.assign(
  // Top-level PlasmicFavComment renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    locationButton: makeNodeComponent("locationButton"),

    // Metadata about props expected for PlasmicFavComment
    internalVariantProps: PlasmicFavComment__VariantProps,
    internalArgProps: PlasmicFavComment__ArgProps
  }
);

export default PlasmicFavComment;
/* prettier-ignore-end */
