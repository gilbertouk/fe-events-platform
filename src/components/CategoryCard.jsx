import { useNavigate } from 'react-router-dom';

import { Card, CardContent } from '@/components/ui/card';
import Icon from './icons/Icon';
import { Avatar } from '@/components/ui/avatar';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCategory = (e) => {
    e.preventDefault();
    navigate(`/events/find?filter=category&value=${category.name}`);
  };

  return (
    <Card className="size-36 cursor-pointer" onClick={handleCategory}>
      <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center p-6">
        <Avatar className="bg-gray-200 size-16 flex items-center justify-center">
          <Icon name={category.icon} size={50} />
        </Avatar>
        <span className="text-md font-semibold text-center">
          {category.name}
        </span>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
