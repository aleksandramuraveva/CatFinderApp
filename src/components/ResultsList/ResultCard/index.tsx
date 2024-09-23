import './styles.css';
import { Actress } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../../store/selectedItemsSlice';
import { AppDispatch, RootState } from '../../../store/store';

interface ResultCardProps {
  actress: Actress;
  handleCardClick: (actress: Actress) => void;
}

const ResultCard: React.FC<ResultCardProps> = ({
  actress,
  handleCardClick,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  );

  const isSelected = selectedItems.some((item) => item.id === actress.id);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (isSelected) {
      dispatch(removeItem(actress));
    } else {
      dispatch(addItem(actress));
    }
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="card result-card"
      role="listitem"
      onClick={(e) => {
        e.stopPropagation();
        handleCardClick(actress);
      }}
    >
      <div className="content">
        <img className="result-image" src={actress.image} alt="photo" />
        <h2>{actress.name}</h2>
        <p>Birth Year: {actress.birth_year}</p>
        <p>Nationality: {actress.nationality}</p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
            onClick={handleCheckboxClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
