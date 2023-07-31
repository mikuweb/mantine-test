import {
  ActionIcon,
  Button,
  Center,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { NextPage } from "next";
import React, { FC } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { RiPlayListAddFill, RiPlayMiniFill } from "react-icons/ri";

const Home: NextPage = () => {
  const theme = useMantineTheme();

  return (
    <Stack mt="-20px">
      <Stack
        style={{
          backgroundColor: theme.colors.gray[0],
          width: "500px",
          height: "100vh",
        }}
        mx="auto"
      >
        {/* Icon */}
        <Group position="apart" style={{ width: "100%" }}>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <AiOutlineSetting />
          </ActionIcon>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <RiPlayListAddFill />
          </ActionIcon>
        </Group>
        {/* Main part -center- */}
        <Center>
          {/* Vertically */}
          <Stack mt="sm">
            {/* Time */}
            <Title
              align="center"
              order={1}
              style={{
                fontWeight: "900",
                fontSize: "4rem",
              }}
            >
              25:00
            </Title>
            <Text align="center">No task</Text>
            <Group mt="sm" mx="auto" mb="md">
              <ActionIcon color="dark" size="xl" variant="transparent">
                -5
              </ActionIcon>
              <ActionIcon radius="xl" color="dark" size="xl" variant="filled">
                <RiPlayMiniFill />
              </ActionIcon>
              <ActionIcon color="dark" size="xl" variant="transparent">
                +5
              </ActionIcon>
            </Group>
            {/* Add tack Button */}
            <Group>
              <Button mx="auto">Add</Button>
            </Group>
            {/* Buttons */}
            <Group>
              <UnstyledButton>🙈 Hide complete</UnstyledButton>
              <UnstyledButton>🎉 Clear complete</UnstyledButton>
              <UnstyledButton>🗑️ Clear all</UnstyledButton>
            </Group>
          </Stack>
        </Center>
      </Stack>
    </Stack>
  );
};

export default Home;
