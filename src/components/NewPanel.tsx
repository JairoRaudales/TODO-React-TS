import { useState } from 'react';
import { IPanelProps } from '../interfaces/IPanel';
import Card from './Card';
import { ITask } from '../interfaces/ITask';
import { INewPanelProps } from '../interfaces/INewPanel';

function NewPanel(props: INewPanelProps) {
  const [title, setTitle] = useState('');
  const [showBubble, setShowBubble] = useState(false); // estado para manejar si se muestra la burbuja de mensaje
  const [showButton, setShowButton] = useState(false); // estado para manejar si se muestra el botón

  const handleAddPanel = () => {
    if (title.trim() !== '') {
      const isPanelExist = props.panels.some(panel => panel.title === title);
      if(isPanelExist) {
        setShowBubble(true); // actualizamos el estado para mostrar la burbuja de mensaje
        setShowButton(false); // ocultamos el botón
      } else {
        props.onAddPanel(title);
        setTitle('');
        setShowBubble(false); // reseteamos el estado para ocultar la burbuja de mensaje si estaba siendo mostrada
        setShowButton(false); // ocultamos el botón
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setShowButton(e.target.value.trim() !== ''); // actualizamos el estado para mostrar u ocultar el botón según el contenido del campo de texto
  };

  return (
    <div className="new-panel">
      <h2>Agregar un nuevo Panel</h2>
      <input
        type="text"
        placeholder="Nombre del panel"
        value={title}
        onChange={handleInputChange}
      />
      {showButton && <button type="button" onClick={handleAddPanel}>Agregar</button>} {/* mostramos el botón si se debe mostrar */}
      {showBubble && <div className="bubble">Este Panel ya existe!</div>} {/* mostramos la burbuja de mensaje si se debe mostrar */}
    </div>
  );
}

export default NewPanel;
