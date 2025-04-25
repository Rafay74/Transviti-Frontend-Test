interface StatCardItem {
    label: string;
    value: string | number;
  }
  
  interface StatsCardProps {
    items: StatCardItem[];
  }

const StatsCard: React.FC<StatsCardProps> = ({ items }) => (
    <div className="w-full max-w-[346px] rounded-lg bg-white px-4 py-2">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex items-center justify-between py-3">
            <span className="text-black text-md">{item.label}</span>
            <span className="text-primary font-medium text-md">{item.value}</span>
          </div>
          {index !== items.length - 1 && <hr className="border-t border-gray-200" />}
        </div>
      ))}
    </div>
  );
  export default StatsCard;
  