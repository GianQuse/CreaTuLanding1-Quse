const Boton = ({ sumar, restar, contador }) => {
    return (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1rem',
          background: '#f4f4f4',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <button 
            onClick={restar} 
            disabled={contador === 0}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1.2rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: contador === 0 ? '#ccc' : '#ff6666',
              color: 'white',
              cursor: contador === 0 ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            -
          </button>
      
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Carrito</span>
      
          <button 
            onClick={sumar}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1.2rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#4CAF50',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            +
          </button>
        </div>
      );
}

export default Boton;