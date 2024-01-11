import { Box, Button, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Login: FC = memo(() => {
  return (
    <Flex>
      <Box>
        <Heading as="h1">ユーザー管理アプリ</Heading>
        <Divider />
        <Input placeholder="ユーザーID" />
        <Button>ログイン</Button>
      </Box>
    </Flex>
  );
});
