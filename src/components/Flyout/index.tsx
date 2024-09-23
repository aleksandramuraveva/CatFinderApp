import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../store/selectedItemsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { CSVLink } from 'react-csv';
import { headers, generateCsvData } from '../../utils/csvUtils';
import './styles.css';

const Flyout: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  );

  const handleUnselectAll = () => {
    dispatch(clearItems());
  };

  const csvData = generateCsvData(selectedItems);
  const filename = `${selectedItems.length}_actresses.csv`;

  return (
    <div className="flyout-container">
      <div className="selected-items-info">
        <p>{selectedItems.length} actresses are selected</p>
      </div>
      <div className="flyout-buttons">
        <button className="unselect-all-button" onClick={handleUnselectAll}>
          Unselect all
        </button>
        <CSVLink
          data={csvData}
          headers={headers}
          filename={filename}
          className="download-button"
        >
          Download
        </CSVLink>
      </div>
    </div>
  );
};

export default Flyout;
