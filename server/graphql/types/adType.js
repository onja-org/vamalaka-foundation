const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLID = require("graphql").GraphQLID;
const GraphQLString = require("graphql").GraphQLString;
const commentType = require("../types/commentType");
const GraphQLList = require("graphql").GraphQLList;

exports.adType = new GraphQLObjectType({
  name: "ad",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      title: {
        type: GraphQLString,
      },
      body: {
        type: GraphQLString,
      },
      username: {
        type: GraphQLString,
      },
      createdAt: {
        type: GraphQLString,
      },
      categoryid: {
        type: new GraphQLNonNull(GraphQLID),
      },
      comments: {
        // type: GraphQLString,
        type: new GraphQLList(commentType.commentType),
      },
    };
  },
});
