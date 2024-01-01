import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import info from "./info.json";
//slide

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: #fff;
`;
const Box = styled(motion.div)`
  height: 400px;
  background: #555;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 10px;
  color: #fff;
  img {
    width: 200px;
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 15px;
    }
  }
`;
const Grid = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
display:flex;
flex-direction:row;
img {
  width: 500px;
  border-radius: 5px;
}
div {
  display: flex;
  flex-direction: column;
  span {
    font-size: 20px;
    font-weight:600;
  }
`;
function ModalAll() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  const toggle = () => setClicked((prev) => !prev);
  const boxLength = [1, 2, 3, 4];
  const overlay = {
    start: {
      opacity: 0,
      background: "rgba(0,0,0,0)",
    },
    animate: {
      opacity: 1,
      background: "rgba(0,0,0,0.5)",
    },
    exits: {
      opacity: 0,
      background: "rgba(0,0,0,0)",
    },
  };
  interface IProps {
    id: number;
    img: string;
    title: string;
    singer: string;
    link: string;
  }
  return (
    <Wrapper onClick={toggle}>
      Modal with Framer motion
      <Grid>
        {info.map((item) => (
          <Box
            onClick={() => setId(item.id + "")}
            layoutId={item.id + ""}
            key={item.id}
          >
            <img src={item.img} alt="" />
            <div>
              <span>{item.title}</span>
              <span>{item.singer}</span>
            </div>
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <OverLay
            onClick={() => setId(null)}
            variants={overlay}
            initial="start"
            animate="animate"
            exit="exits"
          >
            <Box layoutId={id} style={{ width: "1400px", height: "800px" }}>
              {id === "1" && (
                <Modal>
                  <img src={info[0].img} alt="" />
                  <div>
                    <span>{info[0].title}</span>
                    <span>{info[0].singer}</span>
                  </div>
                </Modal>
              )}
              {id === "2" && (
                <Modal>
                  <img src={info[1].img} alt="" />
                  <div>
                    <span>{info[1].title}</span>
                    <span>{info[1].singer}</span>
                  </div>
                </Modal>
              )}
              {id === "3" && (
                <Modal>
                  <img src={info[2].img} alt="" />
                  <div>
                    <span>{info[2].title}</span>
                    <span>{info[2].singer}</span>
                  </div>
                </Modal>
              )}
              {id === "4" && (
                <Modal>
                  <img src={info[3].img} alt="" />
                  <div>
                    <span>{info[3].title}</span>
                    <span>{info[3].singer}</span>
                  </div>
                </Modal>
              )}
            </Box>
          </OverLay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default ModalAll;
