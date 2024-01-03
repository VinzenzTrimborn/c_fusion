// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: yVO7gSdMDe6r

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
import Navbar from "../../Navbar"; // plasmic-import: lwEnvYluELlC/component
import ActionButton from "../../ActionButton"; // plasmic-import: x_Fghcos84Ui/component
import ProposalCard from "../../ProposalCard"; // plasmic-import: 13bqDO-cKM5b/component
import VotingCard from "../../VotingCard"; // plasmic-import: oAGE1uzhgryh/component
import GltfView from "../../GltfView"; // plasmic-import: 2gypwESdRVuN/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: yVO7gSdMDe6r/css

createPlasmicElementProxy;

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  navbar?: p.Flex<typeof Navbar>;
  intro?: p.Flex<"div">;
  actionButton?: p.Flex<typeof ActionButton>;
  projectSelection?: p.Flex<"div">;
  vote?: p.Flex<"div">;
  gltfView?: p.Flex<typeof GltfView>;
};

export interface DefaultHomeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHome.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHome.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHome.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          />

          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"intro"}
            data-plasmic-override={overrides.intro}
            className={classNames(projectcss.all, sty.intro)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zkHqg)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__p4X5M)} />

              <div className={classNames(projectcss.all, sty.freeBox__siZfd)}>
                <div className={classNames(projectcss.all, sty.freeBox__jaGgr)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__n6I7
                    )}
                  >
                    {"Donnersberger\nBr\u00fccke"}
                  </div>
                </div>
              </div>
              <ActionButton
                data-plasmic-name={"actionButton"}
                data-plasmic-override={overrides.actionButton}
                className={classNames("__wab_instance", sty.actionButton)}
              />
            </p.Stack>
          </div>
          <p.Stack
            as={"div"}
            data-plasmic-name={"projectSelection"}
            data-plasmic-override={overrides.projectSelection}
            hasGap={true}
            className={classNames(projectcss.all, sty.projectSelection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___5Ne4N)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___5C98F)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rXqv7
                  )}
                >
                  {"Explore the Different Bridge Designs"}
                </div>
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__k0EkO)}
            >
              <ProposalCard
                className={classNames(
                  "__wab_instance",
                  sty.proposalCard__mcBxV
                )}
              />

              <ProposalCard
                className={classNames("__wab_instance", sty.proposalCard__uiO3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1HmJe
                  )}
                >
                  {"Proposal B"}
                </div>
              </ProposalCard>
              <ProposalCard
                className={classNames("__wab_instance", sty.proposalCard__uf5A)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__p3SfS
                  )}
                >
                  {"Proposal C"}
                </div>
              </ProposalCard>
              <ProposalCard
                className={classNames(
                  "__wab_instance",
                  sty.proposalCard__v78Ut
                )}
              >
                {"Proposal D"}
              </ProposalCard>
              <ProposalCard
                className={classNames(
                  "__wab_instance",
                  sty.proposalCard__utOc1
                )}
              >
                {"Proposal E"}
              </ProposalCard>
            </p.Stack>
          </p.Stack>
          <div
            data-plasmic-name={"vote"}
            data-plasmic-override={overrides.vote}
            className={classNames(projectcss.all, sty.vote)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__haa7O)}
            >
              <VotingCard
                className={classNames("__wab_instance", sty.votingCard__scYcV)}
                proposalName={"Proposal A"}
              />

              <VotingCard
                className={classNames("__wab_instance", sty.votingCard__x7A0)}
                proposalName={"Proposal B"}
              />

              <VotingCard
                className={classNames("__wab_instance", sty.votingCard__zJ9Qw)}
                proposalName={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7R1Md
                    )}
                  >
                    {"Proposal C"}
                  </div>
                }
              />

              <VotingCard
                className={classNames("__wab_instance", sty.votingCard__uEsEd)}
                proposalName={"Proposal D"}
              />

              <VotingCard
                className={classNames("__wab_instance", sty.votingCard__jpljY)}
                proposalName={"Proposal E"}
              />
            </p.Stack>
          </div>
          <GltfView
            data-plasmic-name={"gltfView"}
            data-plasmic-override={overrides.gltfView}
            className={classNames("__wab_instance", sty.gltfView)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "navbar",
    "intro",
    "actionButton",
    "projectSelection",
    "vote",
    "gltfView"
  ],
  section: ["section"],
  navbar: ["navbar"],
  intro: ["intro", "actionButton"],
  actionButton: ["actionButton"],
  projectSelection: ["projectSelection"],
  vote: ["vote"],
  gltfView: ["gltfView"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  navbar: typeof Navbar;
  intro: "div";
  actionButton: typeof ActionButton;
  projectSelection: "div";
  vote: "div";
  gltfView: typeof GltfView;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHome__ArgsType,
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
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    navbar: makeNodeComponent("navbar"),
    intro: makeNodeComponent("intro"),
    actionButton: makeNodeComponent("actionButton"),
    projectSelection: makeNodeComponent("projectSelection"),
    vote: makeNodeComponent("vote"),
    gltfView: makeNodeComponent("gltfView"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Participate Donnersberger",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
