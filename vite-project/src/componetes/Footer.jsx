function Footer() {
  return (
    <>
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', marginTop: "50px" }}>
      <p style={{ fontSize: '0.875rem', color: '#666' }}>
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </p>
      </div>
    </>
  );
}
export default Footer;