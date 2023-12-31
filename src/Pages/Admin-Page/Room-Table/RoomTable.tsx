// RoomTable.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import RoomForm from "../Room-Form/RoomForm";
import UpdateRoomForm from "../Update-Room-Form/UpdateRoomForm";

export interface Room {
  number: number;
  availability: boolean;
  adults: number;
  children: number;
  creationDate: string;
  modificationDate: string;
}

const RoomTable = () => {
  const [tableRows, setTableRows] = useState<Room[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    const sampleData: Room[] = [
      {
        number: 101,
        availability: true,
        adults: 2,
        children: 1,
        creationDate: "2022-01-01",
        modificationDate: "2022-01-05",
      },
    ];

    setTableRows(sampleData);
  }, []);

  const handleCreate = (newRoom: Room) => {
    setTableRows((prevRows) => [...prevRows, newRoom]);
  };

  const handleDelete = (number: number) => {
    const updatedRows = tableRows.filter((room) => room.number !== number);
    setTableRows(updatedRows);
  };

  const handleUpdate = (updatedRoom: Room) => {
    if (selectedRoom) {
      const updatedRows = tableRows.map((room) =>
        room.number === selectedRoom.number ? updatedRoom : room
      );
      setTableRows(updatedRows);
    }
    setIsUpdateFormOpen(false);
  };

  return (
    <Box>
      <Box
        sx={{
          minHeight: "500px",
          border: "2px solid gray",
          borderRadius: "20px",
          backgroundColor: "white",
          p: 2,
          mb: 3,
          mt: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h5">Manage Rooms</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Create
          </Button>
          <RoomForm
            open={isFormOpen}
            handleClose={() => setIsFormOpen(false)}
            handleCreate={handleCreate}
          />
        </Box>
        <Divider sx={{ borderBottom: "2px solid " }} />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Delete Room</TableCell>
                <TableCell>Update</TableCell>
                <TableCell align="left">Number</TableCell>
                <TableCell align="left">Availability</TableCell>
                <TableCell align="left">Adults</TableCell>
                <TableCell align="left">Children</TableCell>
                <TableCell align="left">Creation Date</TableCell>
                <TableCell align="left">Modification Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((room) => (
                <TableRow
                  key={room.number}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Button
                      sx={{ color: "red" }}
                      onClick={() => handleDelete(room.number)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      onClick={() => {
                        setSelectedRoom(room);
                        setIsUpdateFormOpen(true);
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="left">{room.number}</TableCell>
                  <TableCell align="left">
                    {room.availability ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="left">{room.adults}</TableCell>
                  <TableCell align="left">{room.children}</TableCell>
                  <TableCell align="left">{room.creationDate}</TableCell>
                  <TableCell align="left">{room.modificationDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedRoom && (
          <UpdateRoomForm
            open={isUpdateFormOpen}
            handleClose={() => setIsUpdateFormOpen(false)}
            handleUpdate={handleUpdate}
            initialData={selectedRoom}
          />
        )}
      </Box>
    </Box>
  );
};

export default RoomTable;
