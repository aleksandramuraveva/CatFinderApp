import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../store/selectedItemsSlice';
import { AppDispatch, RootState } from '../../store/store';

const Flyout: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  );

  const handleUnselectAll = () => {
    dispatch(clearItems());
  };

  return (
    <div className="flyout-container">
      <div className="selected-items-info">
        <p>{selectedItems.length} actresses are selected</p>
      </div>
      <div className="flyout-buttons">
        <button className="unselect-all-button" onClick={handleUnselectAll}>
          Unselect all
        </button>
        <button className="download-button">Download</button>
      </div>
    </div>
  );
};

export default Flyout;
