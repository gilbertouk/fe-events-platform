import { Card, CardContent } from '@/components/ui/card';

const CategoryCard = ({ category }) => {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-md font-semibold">{category.name}</span>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
