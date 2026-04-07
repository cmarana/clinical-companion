import { Component, type ReactNode } from "react";
import { WifiOff, RefreshCw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  isOffline: boolean;
}

export default class OfflineErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, isOffline: !navigator.onLine };

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleOnline = () => this.setState({ isOffline: false, hasError: false });
  handleOffline = () => this.setState({ isOffline: true });

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError || this.state.isOffline) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center gap-6 bg-background">
          {/* Animated pulse ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="relative rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-6 border border-primary/10">
              <WifiOff className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-heading font-bold text-foreground">
              {this.state.isOffline ? "Você está offline" : "Falha na conexão"}
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {this.state.isOffline
                ? "Sem acesso à internet. Protocolos e medicamentos salvos continuam disponíveis."
                : this.props.fallbackMessage || "Erro ao carregar o conteúdo. Verifique sua conexão."}
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button
              size="lg"
              onClick={this.handleRetry}
              className="w-full rounded-xl h-12 font-heading font-semibold"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Tentar novamente
            </Button>
            {this.state.isOffline && (
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = "/offline"}
                className="w-full rounded-xl h-12 font-heading font-semibold"
              >
                <Download className="h-4 w-4 mr-2" />
                Ver conteúdo salvo
              </Button>
            )}
          </div>

          {/* Subtle connectivity status */}
          <div className="flex items-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[11px] text-muted-foreground font-heading">
              Aguardando conexão...
            </span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
