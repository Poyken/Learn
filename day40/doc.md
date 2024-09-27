# Authen call api có 2 dạng: public và private

# 0->45: refresh token cấp lại access token

# Quy trình: access expire->req tới api token

- > hợp lệ: new access token->lưu access token vào storage gọi lại req
- > kh hợp lệ: logout
  > 30
