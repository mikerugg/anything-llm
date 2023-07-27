import React, { useEffect, useState } from "react";
import { GitHub, GitMerge, Mail, Plus } from "react-feather";
import NewWorkspaceModal, {
  useNewWorkspaceModal,
} from "../Modals/NewWorkspace";
import paths from "../../utils/paths";
import { isMobile } from "react-device-detect";
import { SidebarMobileHeader } from "../Sidebar";

export default function DefaultChatContainer() {
  const [mockMsgs, setMockMessages] = useState([]);
  const {
    showing: showingNewWsModal,
    showModal: showNewWsModal,
    hideModal: hideNewWsModal,
  } = useNewWorkspaceModal();
  const popMsg = !window.localStorage.getItem("anythingllm_intro");

  const MESSAGES = [
   <React.Fragment>
    <div
      className={`flex w-full mt-2 justify-start ${
        popMsg ? "chat__message" : ""
      }`}
    >
      <div className="p-4 max-w-full md:max-w-[75%] bg-orange-100 dark:bg-stone-700 rounded-b-2xl rounded-tr-2xl rounded-tl-sm">
        <p className="text-slate-800 dark:text-slate-200 font-[500] md:font-semibold text-sm md:text-base">
          Welcome to the Case Closed AI model developed by HITBOX.ai.
        </p>
      </div>
    </div>
  </React.Fragment>,

<React.Fragment>
<div
  className={`flex w-full mt-2 justify-end ${
    popMsg ? "chat__message" : ""
  }`}
>
  <div className="p-4 max-w-full md:max-w-[75%] bg-slate-200 dark:bg-amber-800 rounded-b-2xl rounded-tl-2xl rounded-tr-sm">
    <p className="text-slate-800 dark:text-slate-200 font-[500] md:font-semibold text-sm md:text-base">
      How do I get started?!
    </p>
  </div>
</div>
</React.Fragment>,

<React.Fragment>
      <div
        className={`flex w-full mt-2 justify-start ${
          popMsg ? "chat__message" : ""
        }`}
      >
        <div className="p-4 max-w-full md:max-w-[75%] bg-orange-100 dark:bg-stone-700 rounded-b-2xl rounded-tr-2xl rounded-tl-sm">
          <p className="text-slate-800 dark:text-slate-200 font-[500] md:font-semibold text-sm md:text-base">
            It's simple. All collections are organized into buckets we call{" "}
            <b>"Workspaces"</b>. Workspaces are buckets of files, documents,
            images, PDFs, and other files which will be transformed into
            something our AI can then use during content generation and discussion.
            <br />
            <br />
            You can add and remove files at anytime.
            </p>
          <button
            onClick={showNewWsModal}
            className="mt-4 w-fit flex flex-grow gap-x-2 py-[5px] px-4 border border-slate-400 rounded-lg text-slate-800 dark:text-slate-200 justify-start items-center hov$
          >
            <Plus className="h-4 w-4" />
            <p className="text-slate-800 dark:text-slate-200 text-sm md:text-lg leading-loose">
              Create your first workspace
            </p>
          </button>
        </div>
      </div>
    </React.Fragment>,

    <React.Fragment>
      <div
        className={`flex w-full mt-2 justify-start ${
          popMsg ? "chat__message" : ""
        }`}
      >
        <div className="p-4 max-w-full md:max-w-[75%] bg-orange-100 dark:bg-stone-700 rounded-b-2xl rounded-tr-2xl rounded-tl-sm">
          <p className="text-slate-800 dark:text-slate-200 font-[500] md:font-semibold text-sm md:text-base">
            The Case Closed AI offers two ways of talking with your data:
            <br />
            <br />
            <i>Query:</i> Your chats will return data or inferences found with
            the documents in your workspace it has access to. Adding more
            documents to the Workspace make it smarter!
            <br />
            <br />
            <i>Conversational:</i> Your documents + your on-going chat history
            both contribute to the LLM knowledge at the same time. Great for
            appending real-time text-based info or corrections and
            misunderstandings the LLM might have.
            <br />
            <br />
            You can toggle between either mode <i>in the middle of chatting!</i>
          </p>
        </div>
        </div>
    </React.Fragment>,

<React.Fragment>
<div
  className={`flex w-full mt-2 justify-start ${
    popMsg ? "chat__message" : ""
  }`}
>
  <div className="p-4 max-w-full md:max-w-[75%] bg-orange-100 dark:bg-stone-700 rounded-b-2xl rounded-tr-2xl rounded-tl-sm">
    <p className="text-slate-800 dark:text-slate-200 font-[500] md:font-semibold text-sm md:text-base">
      Have Fun Generating! Contact us below:
    </p>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
      >
      <a
        href={paths.mailToMintplex()}
        className="mt-4 w-fit flex flex-grow gap-x-2 py-[5px] px-4 border border-slate-400 rounded-lg text-slate-800 dark:text-slate-200 justify-start items-center h$
      >
        <Mail className="h-4 w-4" >
        <p className="text-slate-800 dark:text-slate-200 text-sm md:text-lg leading-loose">
          Contact HITBOX.ai
        </p>
      </a>
    </div>
    </div>
      </div>
    </React.Fragment>,
  ];

  useEffect(() => {
    function processMsgs() {
      if (!!window.localStorage.getItem("anythingllm_intro")) {
        setMockMessages([...MESSAGES]);
        return false;
      } else {
        setMockMessages([MESSAGES[0]]);
      }

      var timer = 500;
      var messages = [];

      MESSAGES.map((child) => {
        setTimeout(() => {
          setMockMessages([...messages, child]);
          messages.push(child);
        }, timer);
        timer += 2_500;
      });
      window.localStorage.setItem("anythingllm_intro", 1);
    }

    processMsgs();
  }, []);

  return (
    <div
      style={{ height: isMobile ? "100%" : "calc(100% - 32px)" }}
      className="transition-all duration-500 relative md:ml-[2px] md:mr-[8px] md:my-[16px] md:rounded-[26px] bg-white dark:bg-black-900 md:min-w-[82%] p-[18px] h-full overflow-y-scroll"
    >
      {isMobile && <SidebarMobileHeader />}
      {mockMsgs.map((content, i) => {
        return <React.Fragment key={i}>{content}</React.Fragment>;
      })}
      {showingNewWsModal && <NewWorkspaceModal hideModal={hideNewWsModal} />}
    </div>
  );
}
