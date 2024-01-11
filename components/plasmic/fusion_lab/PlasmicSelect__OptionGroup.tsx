// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: ZkFEZxJlkbzP

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";
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
import Select__Option from "../../Select__Option"; // plasmic-import: ke75249KxUU3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicSelect__OptionGroup.module.css"; // plasmic-import: ZkFEZxJlkbzP/css

import SUPER__PlasmicSelect from "./PlasmicSelect"; // plasmic-import: YbzHlcQNiy51/render

createPlasmicElementProxy;

export type PlasmicSelect__OptionGroup__VariantMembers = {
  noTitle: "noTitle";
  isFirst: "isFirst";
};
export type PlasmicSelect__OptionGroup__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  isFirst?: SingleBooleanChoiceArg<"isFirst">;
};
type VariantPropType = keyof PlasmicSelect__OptionGroup__VariantsArgs;
export const PlasmicSelect__OptionGroup__VariantProps =
  new Array<VariantPropType>("noTitle", "isFirst");

export type PlasmicSelect__OptionGroup__ArgsType = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSelect__OptionGroup__ArgsType;
export const PlasmicSelect__OptionGroup__ArgProps = new Array<ArgPropType>(
  "children",
  "title"
);

export type PlasmicSelect__OptionGroup__OverridesType = {
  root?: p.Flex<"div">;
  separator?: p.Flex<"div">;
  titleContainer?: p.Flex<"div">;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultSelect__OptionGroupProps
  extends pp.BaseSelectOptionGroupProps {
  title?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelect__OptionGroup__RenderFunc(props: {
  variants: PlasmicSelect__OptionGroup__VariantsArgs;
  args: PlasmicSelect__OptionGroup__ArgsType;
  overrides: PlasmicSelect__OptionGroup__OverridesType;
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
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
      },
      {
        path: "isFirst",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isFirst
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

  const superContexts = {
    Select: React.useContext(SUPER__PlasmicSelect.Context)
  };

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
      {(hasVariant($state, "isFirst", "isFirst") ? false : true) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(projectcss.all, sty.separator, {
            [sty.separatorisFirst]: hasVariant($state, "isFirst", "isFirst"),
            [sty.separatornoTitle]: hasVariant($state, "noTitle", "noTitle")
          })}
        />
      ) : null}
      {(hasVariant($state, "noTitle", "noTitle") ? false : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(projectcss.all, sty.titleContainer, {
            [sty.titleContainerisFirst]: hasVariant(
              $state,
              "isFirst",
              "isFirst"
            ),
            [sty.titleContainernoTitle]: hasVariant(
              $state,
              "noTitle",
              "noTitle"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Group Name",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      ) : null}
      <div
        data-plasmic-name={"optionsContainer"}
        data-plasmic-override={overrides.optionsContainer}
        className={classNames(projectcss.all, sty.optionsContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <Select__Option
                className={classNames("__wab_instance", sty.option__tbkqb)}
              />

              <Select__Option
                className={classNames("__wab_instance", sty.option__gLbTf)}
              />
            </React.Fragment>
          ),
          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectOptionGroupProps>(props: P) {
  return pp.useSelectOptionGroup(PlasmicSelect__OptionGroup, props, {
    noTitleVariant: { group: "noTitle", variant: "noTitle" },
    isFirstVariant: { group: "isFirst", variant: "isFirst" },
    optionsSlot: "children",
    titleSlot: "title",
    root: "root",
    separator: "separator",
    titleContainer: "titleContainer",
    optionsContainer: "optionsContainer"
  });
}

const PlasmicDescendants = {
  root: ["root", "separator", "titleContainer", "optionsContainer"],
  separator: ["separator"],
  titleContainer: ["titleContainer"],
  optionsContainer: ["optionsContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  separator: "div";
  titleContainer: "div";
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__OptionGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__OptionGroup__VariantsArgs;
    args?: PlasmicSelect__OptionGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelect__OptionGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelect__OptionGroup__ArgsType,
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
          internalArgPropNames: PlasmicSelect__OptionGroup__ArgProps,
          internalVariantPropNames: PlasmicSelect__OptionGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelect__OptionGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect__OptionGroup";
  } else {
    func.displayName = `PlasmicSelect__OptionGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect__OptionGroup = Object.assign(
  // Top-level PlasmicSelect__OptionGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    separator: makeNodeComponent("separator"),
    titleContainer: makeNodeComponent("titleContainer"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicSelect__OptionGroup
    internalVariantProps: PlasmicSelect__OptionGroup__VariantProps,
    internalArgProps: PlasmicSelect__OptionGroup__ArgProps,

    useBehavior
  }
);

export default PlasmicSelect__OptionGroup;
/* prettier-ignore-end */
