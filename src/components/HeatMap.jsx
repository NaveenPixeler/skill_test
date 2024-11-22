import React, { useState, useEffect } from "react";
import styles from "./HeatMap.module.css"; // Importing styles as a module

const generateRandomValue = () => Math.floor(Math.random() * 500) + 50;

const generateData = () => {
  const timeSlots = [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
  ];
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return timeSlots.map((time) => ({
    time,
    ...days.reduce((acc, day) => {
      acc[day] = {
        imp: generateRandomValue(),
        clicks: generateRandomValue(),
        cpm: generateRandomValue(),
      };
      return acc;
    }, {}),
  }));
};

const HeatMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  // Calculate the total for each column (imp, clicks, cpm) for each day
  const calculateTotal = (metric) => {
    return [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ].reduce((total, day) => {
      total[day] = data.reduce((sum, row) => sum + row[day][metric], 0);
      return total;
    }, {});
  };

  // Calculate totals for 'imp', 'clicks', 'cpm'
  const totalImp = calculateTotal("imp");
  const totalClicks = calculateTotal("clicks");
  const totalCpm = calculateTotal("cpm");

  return (
    <>
      <div className="customCard">
        <div className="customCardHeader">
          <div className="headerLeft">
            <h2>Heat Map</h2>
            <p>Select hours to schedule Dayparting</p>
          </div>
        </div>
        <div className="headerRight"></div>
        <div className="customCardBody">
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr className={styles.days}>
                  <th></th>
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <th key={day} colSpan="3">
                      {day}
                    </th>
                  ))}
                </tr>
                <tr className={styles.metricHeaders}>
                  <th></th>
                  {Array(7)
                    .fill(["Imp", "Clicks", "CPM"])
                    .flat()
                    .map((metric, index) => (
                      <th key={index}>{metric}</th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className={styles.time}>{row.time}</td>
                    {[
                      "monday",
                      "tuesday",
                      "wednesday",
                      "thursday",
                      "friday",
                      "saturday",
                      "sunday",
                    ].map((day) => (
                      <React.Fragment key={`${rowIndex}-${day}`}>
                        <td className={styles.imp}>{row[day].imp}</td>
                        <td className={styles.clicks}>{row[day].clicks}</td>
                        <td className={styles.cpm}>₹{row[day].cpm}</td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>

              {/* Footer with total row */}
              <tfoot>
                <tr>
                  <td className={styles.totalTitle}>Total</td>
                  {[
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday",
                    "sunday",
                  ].map((day) => (
                    <React.Fragment key={day}>
                      <td className={styles.totalValue}>{totalImp[day]}</td>
                      <td className={styles.totalValue}>{totalClicks[day]}</td>
                      <td className={styles.totalValue}>{totalCpm[day]}</td>
                    </React.Fragment>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeatMap;
