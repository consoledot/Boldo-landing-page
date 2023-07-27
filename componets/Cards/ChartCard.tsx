const ChartCard = () => {
  return (
    <div className="justify-self-end">
      <div className="flex flex-col gap-6 max-w-sm md:max-w-lg ">
        <img src="/assets/BarChart.png" className="max-w-lg h-60" />
        <div className="flex gap-2  justify-between">
          <img src="/assets/PieChart.png" />
          <div className="relative">
            <img src="/assets/ChartBody.png" />
            <img src="/assets/chart.png" className="absolute top-2 right-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChartCard };
