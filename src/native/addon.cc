/**
 * C++ Native Addon for IDE3
 * Provides high-performance operations for the CLI tool
 */

#include <node.h>
#include <string>

namespace ide3_addon {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
using v8::Number;

/**
 * Example function: Parse file content
 */
void ParseFile(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  
  // Return a simple message
  args.GetReturnValue().Set(
    String::NewFromUtf8(isolate, "Native C++ addon loaded successfully").ToLocalChecked()
  );
}

/**
 * Example function: Calculate hash
 */
void CalculateHash(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  
  if (args.Length() < 1) {
    isolate->ThrowException(
      String::NewFromUtf8(isolate, "Wrong number of arguments").ToLocalChecked()
    );
    return;
  }
  
  // Simple hash calculation (for demonstration)
  v8::String::Utf8Value str(isolate, args[0]);
  std::string input(*str);
  
  unsigned int hash = 0;
  for (char c : input) {
    hash = hash * 31 + c;
  }
  
  args.GetReturnValue().Set(Number::New(isolate, hash));
}

/**
 * Example function: Get system info
 */
void GetSystemInfo(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  
  Local<Object> obj = Object::New(isolate);
  
  obj->Set(
    isolate->GetCurrentContext(),
    String::NewFromUtf8(isolate, "platform").ToLocalChecked(),
    String::NewFromUtf8(isolate, "native-addon").ToLocalChecked()
  ).Check();
  
  obj->Set(
    isolate->GetCurrentContext(),
    String::NewFromUtf8(isolate, "version").ToLocalChecked(),
    String::NewFromUtf8(isolate, "1.0.0").ToLocalChecked()
  ).Check();
  
  args.GetReturnValue().Set(obj);
}

/**
 * Initialize the addon
 */
void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "parseFile", ParseFile);
  NODE_SET_METHOD(exports, "calculateHash", CalculateHash);
  NODE_SET_METHOD(exports, "getSystemInfo", GetSystemInfo);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace ide3_addon
