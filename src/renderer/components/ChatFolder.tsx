import {
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@fluentui/react-components';
import { FolderOpenFilled, FolderRegular } from '@fluentui/react-icons';
import { IChat, IChatFolder } from 'intellichat/types';
import { useDroppable } from '@dnd-kit/core';
import ChatItem from './ChatItem';

export default function ChatFolder({
  folder,
  chats,
  collapsed,
  openItems,
}: {
  folder: IChatFolder;
  chats: IChat[];
  collapsed: boolean;
  openItems: string[];
}) {
  const { setNodeRef } = useDroppable({
    id: folder.id,
  });
  return (
    <AccordionItem key={folder.id} value={folder.id} ref={setNodeRef}>
      <AccordionHeader
        style={{ height: 28 }}
        className={collapsed ? 'collapsed' : 'px-1'}
        expandIcon={
          openItems.includes(folder.id) ? (
            <FolderOpenFilled />
          ) : (
            <FolderRegular />
          )
        }
      >
        {collapsed ? '' : folder.name}
      </AccordionHeader>
      <AccordionPanel>
        <div
          className={`pt-3  ${collapsed ? 'ml-0' : 'border-l border-base ml-3'}`}
          style={{ paddingLeft: collapsed ? 0 : 7}}
        >
          {chats.map((chat) => (
            <ChatItem key={chat.id} chat={chat} collapsed={collapsed} />
          ))}
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
}
