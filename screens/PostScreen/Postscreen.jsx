import Post from "../../components/Post/Post";
import { View, ScrollView, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectUID } from "../../redux/auth/authSelectors";
import { selectPosts } from "../../redux/posts/postSelectors";
import { useEffect } from "react";
import { fetchAllPosts } from "../../redux/posts/postOperations";
import {
  container,
  avatarWrapper,
  avatar,
  userName,
  userEmail,
} from "./PostScreenStyles";

const PostsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const uid = useSelector(selectUID);
  const { posts } = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchAllPosts(uid));
  }, [uid]);

  if (!user) return;

  return (
    <View route={route} navigation={navigation}>
      <ScrollView
        contentContainerStyle={{
          gap: 32,
          paddingBottom: 10,
          paddingTop: 120,
          paddingHorizontal: 16,
        }}
      >
        <View style={container}>
          <View style={avatarWrapper}>
            <Image
              style={avatar}
              source={require("../../assets/userImage.jpg")}
            />
          </View>
          <View>
            <Text style={userName}>Natali Romanova</Text>
            <Text style={userEmail}>testgmail.com</Text>
          </View>
        </View>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            commentsCount={post.comments.length}
            navigation={navigation}
            route={route}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
