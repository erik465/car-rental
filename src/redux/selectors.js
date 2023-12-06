export const selectCars = (state) => state.tasks.items;

export const selectBrandFilter = (state) => state.filters.brand;

export const selectPriceFilter = (state) => state.filters.price;

export const selectMileageMinFilter = (state) => state.filters.mileage.from;

export const selectMileageMaxFilter = (state) => state.filters.mileage.to;
