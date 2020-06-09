import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

const CustomTable = (props) => {
  const { className, models, headers, columns, staticContext, ...rest } = props;

  const classes = useStyles();

  const [selectedModels, setSelectedModels] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    const { models } = props;

    let selectedModels;

    if (event.target.checked) {
      selectedModels = models.map((model) => model._id);
    } else {
      selectedModels = [];
    }

    setSelectedModels(selectedModels);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedModels.indexOf(id);
    let newSelectedModels = [];

    if (selectedIndex === -1) {
      newSelectedModels = newSelectedModels.concat(selectedModels, id);
    } else if (selectedIndex === 0) {
      newSelectedModels = newSelectedModels.concat(selectedModels.slice(1));
    } else if (selectedIndex === selectedModels.length - 1) {
      newSelectedModels = newSelectedModels.concat(selectedModels.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedModels = newSelectedModels.concat(
        selectedModels.slice(0, selectedIndex),
        selectedModels.slice(selectedIndex + 1)
      );
    }

    setSelectedModels(newSelectedModels);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  // console.log("headers", headers);
  // console.log("columns", columns);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedModels.length === models.length}
                      color="primary"
                      indeterminate={
                        selectedModels.length > 0 &&
                        selectedModels.length < models.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  {headers.map((header, index) => (
                    <TableCell key={index}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {models.slice(0, rowsPerPage).map((model) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={model._id}
                    selected={selectedModels.indexOf(model._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedModels.indexOf(model._id) !== -1}
                        color="primary"
                        onChange={(event) => handleSelectOne(event, model._id)}
                        value="true"
                      />
                    </TableCell>
                    {columns.map((Column, index) => (
                      <TableCell key={index}>
                        <Column model={model} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={models.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

CustomTable.propTypes = {
  className: PropTypes.string,
  models: PropTypes.array.isRequired,
};

export default CustomTable;
