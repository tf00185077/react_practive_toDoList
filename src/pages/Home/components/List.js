import Item from "./Item";
// const arr=["MEME",2,3]
const List = ({ listData, deleteData, submitingStatus }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submitingStatus={submitingStatus}
          />
        );
      })}
      {/* {
            arr.map(item =><div>{item}</div>)  map練習
        } */}
      {/* <Item />
        <Item />
        <Item /> */}
    </div>
  );
};
export default List;
