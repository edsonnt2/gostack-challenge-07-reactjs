const formatValue = (value: number | Date): string => {
  return typeof value === 'number'
    ? Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value)
    : Intl.DateTimeFormat('pt-BR').format(value);
};
export default formatValue;
