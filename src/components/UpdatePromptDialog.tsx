import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BUILD_UPDATE_EVENT, type BuildUpdateEventDetail } from "@/lib/version-check";
import { Loader2, Sparkles } from "lucide-react";

/**
 * Renders a confirmation modal when version-check.ts detects a new build.
 * Listens for the BUILD_UPDATE_EVENT custom event; the user can update now
 * or dismiss (the watcher will re-prompt on the next interval check).
 */
export function UpdatePromptDialog() {
  const [detail, setDetail] = useState<BuildUpdateEventDetail | null>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const onUpdate = (e: Event) => {
      const ev = e as CustomEvent<BuildUpdateEventDetail>;
      if (!ev.detail) return;
      setUpdating(false);
      setDetail(ev.detail);
    };
    window.addEventListener(BUILD_UPDATE_EVENT, onUpdate);
    return () => window.removeEventListener(BUILD_UPDATE_EVENT, onUpdate);
  }, []);

  const handleConfirm = async () => {
    if (!detail) return;
    setUpdating(true);
    try {
      await detail.confirm();
      // confirm() triggers location.replace — modal will be gone by then.
    } catch {
      setUpdating(false);
    }
  };

  const handleDismiss = () => {
    if (!detail || updating) return;
    detail.dismiss();
    setDetail(null);
  };

  return (
    <AlertDialog
      open={!!detail}
      onOpenChange={(open) => {
        if (!open) handleDismiss();
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden />
            Nova versão disponível
          </AlertDialogTitle>
          <AlertDialogDescription>
            Uma atualização do PULSO foi publicada com correções e melhorias.
            Recarregue agora para receber a versão mais recente — leva apenas alguns segundos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={updating} onClick={handleDismiss}>
            Mais tarde
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={updating}
            onClick={(e) => {
              e.preventDefault();
              void handleConfirm();
            }}
          >
            {updating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Atualizando…
              </>
            ) : (
              "Atualizar agora"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default UpdatePromptDialog;
