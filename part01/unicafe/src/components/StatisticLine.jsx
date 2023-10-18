const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>
          <h3>{text}</h3>
        </td>
        <td>
          <h3>{value}</h3>
        </td>
      </tr>
    </>
  );
};

export default StatisticLine;
