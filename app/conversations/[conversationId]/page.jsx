import getConversationById from "@/app/actions/getConversationById";
import getConversations from "@/app/actions/getConversations";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

const ConversationId = async ({ params }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getConversations(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-screen">
        <div className="h-screen flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-screen">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
