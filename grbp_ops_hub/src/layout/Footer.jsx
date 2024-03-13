const DashFooter = () => {
  const content = (
    <footer className="dash-footer">
      <div className="copyright-container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Designed by Midnight Solutions
        </p>
      </div>
    </footer>
  );

  return content;
};
export default DashFooter;
