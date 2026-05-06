export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 5vw',
      borderTop: '1px solid var(--clr-border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--clr-muted)', textTransform: 'uppercase' }}>
        © 2024 Aditya Sharma
      </span>
      <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--clr-muted)', textTransform: 'uppercase' }}>
        Designed & Built with ♥
      </span>
    </footer>
  );
}
