import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReferAndEarn from './components/ReferAndEarn';
import {Toaster} from 'react-hot-toast';
import ReferModal from './components/ReferModal'; 

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Toaster/>
      <Header />
      <main>
        <ReferAndEarn handleOpen={handleOpen} />
      </main>
      <Footer />
      <ReferModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
