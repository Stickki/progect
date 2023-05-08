import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Accounting employees in the company X</h1>
      <h2>General number employees: {employees}</h2>
      <h2>Benifits will receive: {increased}</h2>
    </div>
  );
};

export default AppInfo;
