import StarRating from "../Rating/StarRating";

interface CardProps {
  id?: any;
  image?: string;
  price?: string;
  category?: string;
  title?: string;
  rating?: RatingProps;
}

interface RatingProps {
  rate: number;
}

function Card(props: CardProps) {
  return (
    <div className="w-[268px] h-full rounded-xl border border-[#D1D1D1]">
      <div className="p-4 rounded-xl">
        <div className="mb-8 rounded-xl">
          <img
            src={props?.image}
            className="w-[236px] h-[180px] object-contain rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-start w-full">
          <h1 className="font-poppins text-c1-a">{props?.title}</h1>
          <div className="mt-1 font-roboto">
            Category: <span>{props?.category}</span>
          </div>
          <div className="mt-1 w-full text-[#FFC749]">
            {StarRating(props?.rating?.rate ?? 0)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
