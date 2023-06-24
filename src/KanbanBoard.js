import { useState } from "react";
import EditIcon from "./assets/edit.svg";
import LinkIcon from "./assets/link.svg";
import InviteIcon from "./assets/add.svg";
import MiniCalendarIcon from "./assets/mini-calendar.svg";
import FilterIcon from "./assets/filter.svg";
import UsersIcon from "./assets/users.svg";
import GridIcon from "./assets/grid-view.svg";
import ListIcon from "./assets/list-view.svg";
import ArrowDownIcon from "./assets/arrow-down.svg";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { avatarList, kanbanData } from "./data";

const KanbanBoard = () => {
  const [columns, setColumns] = useState(kanbanData);
  const [draggedCard, setDraggedCard] = useState(null);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(card.id));
    setDraggedCard(card);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDragEnter = e => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    const cardIdString = e.dataTransfer.getData("text/plain");
    if (!cardIdString) {
      return;
    }

    const cardId = JSON.parse(cardIdString);
    const updatedColumns = columns.map(column => ({ ...column }));

    const sourceColumnIndex = updatedColumns.findIndex(column =>
      column.cards.find(card => card.id === cardId)
    );
    if (sourceColumnIndex !== -1) {
      const sourceColumn = updatedColumns[sourceColumnIndex];
      const updatedSourceCards = sourceColumn.cards.filter(
        card => card.id !== cardId
      );
      updatedColumns[sourceColumnIndex] = {
        ...sourceColumn,
        cards: updatedSourceCards,
      };
    }

    const targetColumnIndex = updatedColumns.findIndex(
      column => column.id === columnId
    );
    if (
      targetColumnIndex !== -1 &&
      !updatedColumns[targetColumnIndex].cards.some(card => card.id === cardId)
    ) {
      const targetColumn = updatedColumns[targetColumnIndex];
      const cardToAdd = kanbanData
        .flatMap(column => column.cards)
        .find(card => card.id === cardId);
      if (cardToAdd) {
        if (columnId === "done") {
          cardToAdd.priority = "Completed";
        } else if (cardToAdd.priority === "Completed") {
          cardToAdd.priority = "Low";
        }
        const updatedTargetCards = [cardToAdd, ...targetColumn.cards];
        updatedColumns[targetColumnIndex] = {
          ...targetColumn,
          cards: updatedTargetCards,
        };
      }
    }

    setColumns(updatedColumns);
    setDraggedCard(null);
  };

  // console.log({columns});

  return (
    <div className="px-4 md:py-4 md:px-6 lg:px-10 w-full">
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 mb-8">
          <div className="w-full md:w-fit flex justify-between gap-4 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold md:mb-4">
                Mobile App
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={EditIcon}
                alt="Edit"
                width={30}
                height={30}
                className="cursor-pointer"
              />
              <img
                src={LinkIcon}
                alt="Copy Link"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full md:w-fit flex justify-between md:justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={InviteIcon}
                alt="Invite"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              <p className="text-blue font-medium">Invite</p>
            </div>
            <div className="flex">
              {avatarList.map(avatar => (
                <img
                  src={avatar.avatar}
                  alt={avatar.id}
                  className={`${
                    avatar.id === 1 ? "" : "-ml-2"
                  } cursor-pointer w-7 h-7 md:w-9 md:h-9`}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mt-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Button
                prefix={FilterIcon}
                text="Filter"
                suffix={ArrowDownIcon}
              />
              <Button
                prefix={MiniCalendarIcon}
                text="Today"
                suffix={ArrowDownIcon}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center divide-x-0 md:divide-x md:divide-accent">
              <div>
                <Button prefix={UsersIcon} text="Share" />
              </div>
              <div className="flex gap-4 pl-4">
                <img
                  src={ListIcon}
                  alt="List View"
                  className="cursor-pointer"
                />
                <img
                  src={GridIcon}
                  alt="Grid View"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between md:gap-[8px] gap-4 my-4">
        {columns.map(column => (
          <div
            key={column.id}
            className="bg-secondary p-4 md:px-3 px-6 rounded-2xl w-full"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDrop={e => handleDrop(e, column.id)}
          >
            <div
              className={`flex justify-between items-center mb-4 ${
                column.id === "inProgress"
                  ? `border-inProgress`
                  : column.id === "done"
                  ? `border-done`
                  : `border-blue`
              } border-b-4 pb-4`}
            >
              <div>
                <h2 className="text-base font-medium flex items-center gap-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      column.id === "inProgress"
                        ? `bg-inProgress`
                        : column.id === "done"
                        ? `bg-done`
                        : `bg-blue`
                    }`}
                  />
                  {column.title}
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-[#E0E0E0] text-[#625F6D]">
                    {column.cards.length}
                  </span>
                </h2>
              </div>
              {column.id === "todo" && (
                <div>
                  <img
                    src={InviteIcon}
                    alt="Invite"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>
            {column.cards.map(card => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                priority={card.priority}
                desc={card.desc}
                images={card.images}
                comments={card.comments}
                files={card.files}
                avatars={card.avatars}
                isCardDragged={draggedCard === card}
                onDragStart={e => handleDragStart(e, card)}
                onDragEnd={() => setDraggedCard(null)}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default KanbanBoard;
