import { computed, toRefs, reactive } from "vue";
import { Columns, DataSource } from "../types/p-table";

export default (
  columnsProp: Columns,
  dataSourceProp: DataSource,
  itemsPerPageProp: number,
  currentPageProp: number
) => {
  const data = reactive({
    columns: columnsProp,
    dataSource: dataSourceProp,
    itemsPerPage: itemsPerPageProp,
    currentPage: currentPageProp,
  });

  const { currentPage, columns, dataSource, itemsPerPage } = toRefs(data);

  const incrementPage = () => currentPage.value++;
  const decrementPage = () => currentPage.value--;

  console.log(
    currentPage.value * itemsPerPage.value >= dataSource.value.length
  );

  const backButtonDisabled = computed(() => currentPage.value === 1);
  const nextButtonDisabled = computed(
    () => currentPage.value * itemsPerPage.value >= dataSource.value.length
  );

  const totalPages = computed(() =>
    Math.ceil(dataSource.value.length / itemsPerPage.value)
  );

  const tableColumnValues = computed(() => {
    // Remove all the extra data from the dataSource that is not in the columns
    dataSource.value.forEach((row) => {
      Object.keys(row).forEach((key) => {
        if (!columns.value.find((column) => column.id === key)) {
          delete row[key];
        }
      });
    });

    // Sort the dataSource by the column id and return only their values
    const allTableColumnValues = dataSource.value.map((row) => {
      return Object.entries(row)
        .sort((a, b) => {
          return (
            columns.value.findIndex((column) => column.id === a[0]) -
            columns.value.findIndex((column) => column.id === b[0])
          );
        })
        .map(([_, value]) => value);
    });

    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return allTableColumnValues.slice(start, end);
  });

  return {
    tableColumnValues,
    backButtonDisabled,
    nextButtonDisabled,
    incrementPage,
    decrementPage,
    currentPage,
    totalPages,
  };
};
