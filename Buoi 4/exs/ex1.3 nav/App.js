import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

export default function App({ links }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer(event) {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  }

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                <Routes>
                  <Route
                    exact
                    path={link.url}
                    element={
                      <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{ color: "primary" }}
                      />
                    }
                  />
                  <Route
                    path="/"
                    element={<ListItemText primary={link.name} />}
                  />
                </Routes>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

App.defaultProps = {
  links: [
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" },
  ],
};
