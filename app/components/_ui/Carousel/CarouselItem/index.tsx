interface CarouselItemProps {
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
