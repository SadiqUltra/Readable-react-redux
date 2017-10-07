import {
  ADD_COMMENT,
  DELETE_COMMENT,
  PARENT_DELETED_COMMENT
} from '../actions/comments'

const initalCommentState = []

function comments(state = initalCommentState, action){
  const {parentId, comments} = action
}


export default comments
